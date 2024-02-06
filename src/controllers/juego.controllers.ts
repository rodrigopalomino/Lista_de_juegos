import { Request, Response } from "express";
import {
  _createJuego,
  _getJuego,
  _getJuegos,
  _searchJuego,
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

    const listaGeneros = generos === "" ? [] : (generos as string).split(",");
    const listaConsolas =
      consolas === "" ? [] : (consolas as string).split(",");

    const response = await _getJuegos(
      Number(inicio),
      Number(cantidad),
      listaGeneros,
      listaConsolas
    );

    res.status(response.status).json(response.items);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export const searchJuego = async (req: Request, res: Response) => {
  const { nombre } = req.params;
  const { cantidad, inicio } = req.query;

  try {
    const response = await _searchJuego(
      nombre,
      Number(inicio),
      Number(cantidad)
    );
    res.status(response.status).json(response.items);
  } catch (error) {
    res.status(400).json(error);
  }
};
