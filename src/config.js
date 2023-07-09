import { config } from "dotenv";
config();
//BD
export const PORT = process.env.PORT;
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_PORT = process.env.DB_PORT;
//JWT
export const JWT_SECRET=process.env.JWT_SECRET
export const JWT_EXPIRES=process.env.JWT_EXPIRES