import express from "express";
import cors from "cors";
import { router } from "../routes/index";
import { Juego } from "./juego";
import { Consola } from "./consola";
import { Genero } from "./genero";
import { Juego_Consola } from "./juego_consola";
import { Juego_Genero } from "./juego_genero";

class Server {
  app: express.Application;
  PORT: string;

  constructor() {
    this.app = express();

    this.PORT = process.env.PORT || "3001";

    this.listen();
    this.middlewares();
    this.routes();
    this.dbConnection();
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`ejecutandose el el puerto ${this.PORT}`);
    });
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(router);
  }

  async dbConnection() {
    try {
      await Juego.sync();
      await Consola.sync();
      await Genero.sync();
      await Juego_Consola.sync();
      await Juego_Genero.sync();
    } catch (error) {
      console.log(error);
    }
  }
}

export default Server;
