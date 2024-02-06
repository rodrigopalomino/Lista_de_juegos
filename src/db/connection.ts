import { NUMBER, Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_DATABASE || "lista_juegos",
  process.env.DB_USER || "rodrigo",
  process.env.DB_PASSWORD || "ccd_rpc_06",
  {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT),
    dialect: "mysql",
  }
);

export default sequelize;
