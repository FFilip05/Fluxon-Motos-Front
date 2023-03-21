import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from "typeorm";
import { Model } from "./model.model";
export interface IEngine {
  id: string;
  name: string;
  displacement: number;
  models: Model[];
}

@Entity({ name: "engine" })
export class Engine extends BaseEntity implements IEngine {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column("float")
  public displacement: number;

  @OneToMany(() => Model, (model) => model.engine)
  // @JoinTable()
  public models: Model[];

  @Column()
  public turbo: string;

  @Column()
  public cylinders_count: number;
}
