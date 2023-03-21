import { AppDataSource } from "../../../config/database";
import { Stats, IStats } from "../models/stats.model";

const statsRepository = AppDataSource.getRepository(Stats);

export class StatsService {
  public async getCompanies(): Promise<Stats[]> {
    const statss = await statsRepository.find()
    return statss
  }
  public async getStatsById(id: string): Promise<Stats> {
    const stats = await statsRepository.findOneBy({id: id})
    return stats
  }
}
