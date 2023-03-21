import { AppDataSource } from "../../../config/database";
import { Company, ICompany } from "../models/company.model";

const companyRepository = AppDataSource.getRepository(Company);

export class CompanyService {
  public async getCompanies(): Promise<Company[]> {
    const companys = await companyRepository.find()
    return companys
  }
  public async getCompanyById(id: string): Promise<Company> {
    const company = await companyRepository.findOneBy({id: id})
    return company
  }
}
