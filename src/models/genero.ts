import { DataTypes, Model } from "sequelize";
import { Genero as GeneroInterface } from "../interface/genero";
import sequelize from "../db/connection";

export interface GeneroModel extends Model<GeneroInterface>, GeneroInterface {}

export const Genero = sequelize.define<GeneroModel>(
  "genero",
  {
    genero_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);
