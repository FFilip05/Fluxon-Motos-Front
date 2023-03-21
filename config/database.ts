import { DataSource } from "typeorm";
import { Company } from "../src/api/models/company.model";
import { Engine } from "../src/api/models/engine.model";
import { Model } from "../src/api/models/model.model";
import { Stats } from "../src/api/models/stats.model";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Company, Engine, Model, Stats],
  synchronize: true,
  migrationsRun: false,
  logging: true,
  // dropSchema: true,
  charset: "utf8_general_ci",
});
