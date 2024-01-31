import { DataTypes, Model } from "sequelize";
import { Consola as ConsolaInterface } from "../interface/consola";
import sequelize from "../db/connection";

export interface ConsolaModel
  extends Model<ConsolaInterface>,
    ConsolaInterface {}

export const Consola = sequelize.define<ConsolaModel>(
  "consola",
  {
    consola_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    consola: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);
