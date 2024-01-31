import { Request, Response } from "express";
import { _getGeneros } from "../services/genero.services";

export const getGeneros = async (req: Request, res: Response) => {
  try {
    const response = await _getGeneros();
    res.status(response.status).json(response.items);
  } catch (error) {
    res.status(400).json(error);
  }
};
