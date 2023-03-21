import { Request, Response, Router } from "express";
import { StatsController } from "../controllers/stats.controller";
import { catchAsync } from "../../utils/catchAsync";

export const statsRouter: Router = Router();

statsRouter.get("/",catchAsync(async(req: Request, res: Response) => {
    const response = await new StatsController().getCompanies()
    return res.status(200).json(response)
}));
statsRouter.get("/:id",catchAsync(async(req: Request, res: Response) => {
    const response = await new StatsController().getStatsById(req.params.id)
    return res.status(200).json(response)
}));
