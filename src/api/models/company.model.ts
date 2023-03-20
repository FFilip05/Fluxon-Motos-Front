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

export interface ICompany {
  id: string;
  name: string;
  country_of_orign: string;
  model: Model;
}

@Entity({ name: "company" })
export class Company extends BaseEntity implements ICompany {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column()
  public country_of_orign: string;

  @OneToMany(() => Model, (model) => model.company)
  // @JoinColumn()
  public model: Model;
}
