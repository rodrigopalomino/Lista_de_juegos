import { DataTypes, Model } from "sequelize";
import { Juego_Genero as Juego_Genero_Interface } from "../interface/juego_genero";
import sequelize from "../db/connection";
import { Juego } from "./juego";
import { Genero } from "./genero";

export interface Juego_Genero_Model
  extends Model<Juego_Genero_Interface>,
    Juego_Genero_Interface {}

export const Juego_Genero = sequelize.define<Juego_Genero_Model>(
  "juego_genero",
  {
    juego_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    genero_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Juego_Genero.belongsTo(Juego, {
  foreignKey: { name: "juego_id", allowNull: false },
});
Juego_Genero.belongsTo(Genero, {
  foreignKey: { name: "genero_id", allowNull: false },
});
