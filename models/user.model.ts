import {
  Table,
  Model,
  Column,
  DataType,
  Scopes,
  BelongsToMany,
  HasMany,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Dog } from "./Dog.model";
import { Role } from "./Role";

@Table({
  timestamps: false,
  tableName: "users",
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstname!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastname!: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  age!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address!: string;

  @HasMany(() => Dog)
  dogs?: Dog[];

  @ForeignKey(() => Role)
  @Column
  roldId!: number;

  @BelongsTo(() => Role)
  role!: Role;
  //   @Column({
  //     type: DataType.BOOLEAN,
  //     allowNull: true,
  //     defaultValue: true,
  //   })
  //   isGoodBoy!: boolean;
}
