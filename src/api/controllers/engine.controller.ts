import { Engine } from "../models/engine.model";
import { EngineService } from "../services/engine.service";
import { Get, Route, Tags } from "tsoa";
@Route("engine")
@Tags("Engine")
export class EngineController {
    @Get('/')
  public async getEngines(): Promise<Engine[]> {
    const engines = await new EngineService().getEngines();
    return engines;
  }
  @Get('/{id}')
  public async getEngineById(id: string): Promise<Engine> {
    const engine = await new EngineService().getEngineById(id);
    return engine;
  }
}
