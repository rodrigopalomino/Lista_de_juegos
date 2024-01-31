import { DataTypes, Model } from "sequelize";
import { Juego_Consola as Juego_Consola_Interface } from "../interface/juego_consola";
import sequelize from "../db/connection";
import { Juego } from "./juego";
import { Consola } from "./consola";

export interface Juego_Consola_Model
  extends Model<Juego_Consola_Interface>,
    Juego_Consola_Interface {}

export const Juego_Consola = sequelize.define<Juego_Consola_Model>(
  "juego_consola",
  {
    juego_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    consola_id: {
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

Juego_Consola.belongsTo(Juego, {
  foreignKey: { name: "juego_id", allowNull: false },
});
Juego_Consola.belongsTo(Consola, {
  foreignKey: { name: "consola_id", allowNull: false },
});
