import { Request, Response, Router } from "express";
import { EngineController } from "../controllers/engine.controller";
import { catchAsync } from "../../utils/catchAsync";

export const engineRouter: Router = Router();

engineRouter.get("/",catchAsync(async(req: Request, res: Response) => {
    const response = await new EngineController().getEngines()
    return res.status(200).json(response)
}));
engineRouter.get("/:id",catchAsync(async(req: Request, res: Response) => {
    const response = await new EngineController().getEngineById(req.params.id)
    return res.status(200).json(response)
}));
