import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { User } from "./user.model";
// import { User } from "./user.model";

@Table({
  timestamps: false,
  tableName: "role",
})
export class Role extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  rank!: string;

  @HasMany(() => User)
  users?: User[];
}
