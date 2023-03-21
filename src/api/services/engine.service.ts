import { AppDataSource } from "../../../config/database";
import { Engine, IEngine } from "../models/engine.model";

const engineRepository = AppDataSource.getRepository(Engine);

export class EngineService {
  public async getEngines(): Promise<Engine[]> {
    const engines = await engineRepository.find()
    return engines
  }
  public async getEngineById(id: string): Promise<Engine> {
    const engine = await engineRepository.findOneBy({id: id})
    return engine
  }
}
