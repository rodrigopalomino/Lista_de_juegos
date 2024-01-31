import { Request, Response } from "express";
import { Juego as JuegoInterface } from "../interface/juego";
import {
  _createJuego,
  _getJuego,
  _getJuegos,
} from "../services/juego.services";

export const getJuego = async (req: Request, res: Response) => {
  const { nombre } = req.params;

  try {
    const response = await _getJuego(nombre);

    res.status(response.status).json(response.item);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const createJuego = async (req: Request, res: Response) => {
  const { generos, consolas, juego } = req.body;

  try {
    const response = await _createJuego(juego, generos, consolas);
    res.status(response.status).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getJuegos = async (req: Request, res: Response) => {
  try {
    const { cantidad, inicio, generos, consolas } = req.query;

    const listaGeneros = (generos as string).split(",");
    const listaConsolas = (consolas as string).split(",");
    console.log("inicio : ", inicio);
    console.log("cantidad : ", cantidad);
    console.log("listaGeneros : ", listaGeneros);
    console.log("listaConsolas : ", listaConsolas);

    const response = await _getJuegos(
      Number(inicio),
      Number(cantidad),
      listaGeneros,
      listaConsolas
    );

    res.status(response.status).json(response.items);
  } catch (error) {
    res.status(400).json(error);
  }
};
