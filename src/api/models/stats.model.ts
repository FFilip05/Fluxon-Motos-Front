import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Model } from "./model.model";
export interface IStats {
  id: string;
  mph_0_60: number;
  mph_0_125: number;
  mile1_4: number;
  mile1_2: number;
  mph_top_speed: number;
  model: Model;
}

@Entity({ name: "stats" })
export class Stats extends BaseEntity implements IStats {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column('float')
  public mph_0_60: number;

  @Column('float')
  public mph_0_125: number;

  @Column('float')
  public mile1_2: number;

  @Column('float')
  public mile1_4: number;

  @Column('float')
  public mph_top_speed: number;

  @OneToMany(() => Model, (model) => model.stats)
  // @JoinColumn()
  public model: Model;
}
