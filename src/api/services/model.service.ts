import { AppDataSource } from "../../../config/database";
import { Model, IModel } from "../models/model.model";

const modelRepository = AppDataSource.getRepository(Model);

export class ModelService {
  public async getAllModels(): Promise<Model[]> {
    const models = await modelRepository.find()
    return models
  }
  public async getModelById(id: string): Promise<Model> {
    const model = await modelRepository.findOneBy({id: id})
    return model
  }
}
