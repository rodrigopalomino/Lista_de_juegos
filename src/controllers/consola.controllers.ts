import { Request, Response } from "express";
import { _getConsolas } from "../services/consola.services";

export const getConsolas = async (req: Request, res: Response) => {
  try {
    const response = await _getConsolas();
    res.status(response.status).json(response.items);
  } catch (error) {
    res.status(400).json(error);
  }
};
