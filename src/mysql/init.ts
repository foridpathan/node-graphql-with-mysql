import dotEnv from "dotenv";
dotEnv.config();

import { Recipe } from "./models/index.js";

const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV !== "test";

const dbInit = () => Promise.all([Recipe.sync({ alter: isDev || isTest })]);

export default dbInit;
