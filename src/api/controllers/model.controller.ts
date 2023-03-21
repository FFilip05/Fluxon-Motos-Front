import { Model } from "../models/model.model";
import { ModelService } from "../services/model.service";
import { Get, Route, Tags } from "tsoa";
@Route("model")
@Tags("Model")
export class ModelController {
    @Get('/')
  public async getAllModels(): Promise<Model[]> {
    const models = await new ModelService().getModels();
    return models;
  }
  @Get('/{id}')
  public async getModelById(id: string): Promise<Model> {
    const model = await new ModelService().getModelById(id);
    return model;
  }
}
