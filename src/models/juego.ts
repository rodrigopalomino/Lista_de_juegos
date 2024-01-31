import { DataTypes, Model } from "sequelize";
import { Juego as JuegoInterface } from "../interface/juego";
import sequelize from "../db/connection";

export interface JuegoModel extends Model<JuegoInterface>, JuegoInterface {}

export const Juego = sequelize.define<JuegoModel>(
  "juego",
  {
    juego_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    desarrolladora: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: false }
);
