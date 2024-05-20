import Dotenv from "dotenv";
import path from "path";

Dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASEURL,
};
