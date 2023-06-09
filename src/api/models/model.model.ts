import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToOne,
} from "typeorm";
import { Company } from "./company.model";
import { Stats } from "./stats.model";
import { Engine } from "./engine.model";
export interface IModel {
  id: string;
  name: string;
  serie: string;
  engine: Engine;
  company: Company;
  category: string;
  horsepower: number;
  torque: number;
  weight: number;
  productions_year_start: number;
  productions_year_end: number;
  stats: Stats;
}

@Entity({ name: "model" })
export class Model extends BaseEntity implements IModel {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column()
  public serie: string;

  @ManyToOne(() => Engine, engine => engine.models)
  @JoinTable()
  public engine: Engine;

  @ManyToOne(() => Company, (company) => company.model)
  @JoinTable()
  public company: Company;

  @Column()
  public category: string;

  @Column()
  public horsepower: number;

  @Column()
  public torque: number;

  @Column()
  public weight: number;

  @Column({ type: "year" })
  public productions_year_start: number;

  @Column({ type: "year" })
  public productions_year_end: number;

  @Column("float")
  public mpg: number;

  @ManyToOne(() => Stats, (stats) => stats.model)
  @JoinTable()
  public stats: Stats;
}
