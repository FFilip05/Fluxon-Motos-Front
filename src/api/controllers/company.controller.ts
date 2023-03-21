import { Company } from "../models/company.model";
import { CompanyService } from "../services/company.service";
import { Get, Route, Tags } from "tsoa";
@Route("model")
@Tags("Company")
export class CompanyController {
    @Get('/')
  public async getCompanies(): Promise<Company[]> {
    const models = await new CompanyService().getCompanies();
    return models;
  }
  @Get('/{id}')
  public async getCompanyById(id: string): Promise<Company> {
    const model = await new CompanyService().getCompanyById(id);
    return model;
  }
}
