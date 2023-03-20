import { Request, Response, Router } from "express";
import { ModelController } from "../controllers/model.controller";
import { catchAsync } from "../../utils/catchAsync";

export const modelRouter: Router = Router();

modelRouter.get("/",catchAsync(async(req: Request, res: Response) => {
    const response = await new ModelController().getAllModels()
    return res.status(200).json(response)
}));
modelRouter.get("/:id",catchAsync(async(req: Request, res: Response) => {
    const response = await new ModelController().getModelById(req.params.id)
    return res.status(200).json(response)
}));
