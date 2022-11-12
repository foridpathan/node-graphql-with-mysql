// npm install @apollo/server express graphql cors body-parser
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { readFileSync } from "fs";

import dbInit from "./models/init.js";

import resolvers from "./resolvers/index.js";
const typeDefs = readFileSync("./src/generated/schema.graphql", {
  encoding: "utf-8",
});

const port = process.env.PORT;

// Required logic for integrating with Express
const app = express();
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
// Ensure we wait for our server to start
await server.start();

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
  "/gql",
  cors<cors.CorsRequest>(),
  bodyParser.json(),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

dbInit();

// Modified server startup
// await new Promise((resolve: any) => httpServer.listen({ port: 3001 }, resolve));
await new Promise<void>((resolve) =>
  httpServer.listen({ port: port }, resolve)
);

console.log(`🚀 Server ready at http://localhost:${port}/`);
