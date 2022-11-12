import dotEnv from "dotenv";
dotEnv.config();

const dbConfig = {
  HOST: process.env.HOST || "localhost",
  USER: process.env.DATABASE_USER || "root",
  PASSWORD: process.env.DATABASE_PASS || "",
  DB: process.env.DATABASE_NAME || "",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
export default dbConfig;
