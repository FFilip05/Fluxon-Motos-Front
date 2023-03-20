import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinColumn,
} from "typeorm";
import { Model } from "./model.model";
export interface IEngine {
  id: string;
  name: string;
  displacement: number;
  model: Model[];
}

@Entity({ name: "engine" })
export class Engine extends BaseEntity implements IEngine {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column("float")
  public displacement: number;

  @ManyToMany(() => Model, (model) => model.engine)
  // @JoinColumn()
  public model: Model[];
}
