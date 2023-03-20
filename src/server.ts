import * as dotenv from "dotenv";
dotenv.config();
import express, { Express, NextFunction, Request, Response } from "express";
import { AppDataSource } from "../config/database";
import { modelRouter } from "./api/routes/model.router";

export const createServer = async (): Promise<Express> => {
  const app = express();
  // app.use(express.static(path.join(__dirname,)))

  await AppDataSource.initialize();

  //API Routes
  app.use("/api/model", modelRouter);

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const stausCode = err.code || 500;
    if (stausCode === 404) next();
    res.status(stausCode).send(err.message);
  });

  //404 Error handler
  app.get("*", (req: Request, res: Response) => {
    res.send("Error 404");
  });
  return app;
};
