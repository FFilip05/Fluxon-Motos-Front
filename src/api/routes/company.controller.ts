import { Request, Response, Router } from "express";
import { CompanyController } from "../controllers/company.controller";
import { catchAsync } from "../../utils/catchAsync";

export const companyRouter: Router = Router();

companyRouter.get("/",catchAsync(async(req: Request, res: Response) => {
    const response = await new CompanyController().getCompanies()
    return res.status(200).json(response)
}));
companyRouter.get("/:id",catchAsync(async(req: Request, res: Response) => {
    const response = await new CompanyController().getCompanyById(req.params.id)
    return res.status(200).json(response)
}));
