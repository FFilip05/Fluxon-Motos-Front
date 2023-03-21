import { Stats } from "../models/stats.model";
import { StatsService } from "../services/stats.service";
import { Get, Route, Tags } from "tsoa";
@Route("model")
@Tags("Stats")
export class StatsController {
    @Get('/')
  public async getCompanies(): Promise<Stats[]> {
    const models = await new StatsService().getCompanies();
    return models;
  }
  @Get('/{id}')
  public async getStatsById(id: string): Promise<Stats> {
    const model = await new StatsService().getStatsById(id);
    return model;
  }
}
