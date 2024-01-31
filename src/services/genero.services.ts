import { Genero } from "../models/genero";

export const _getGeneros = async () => {
  try {
    const items = await Genero.findAll();
    return { status: 200, items };
  } catch (error) {
    return { status: 200, error };
  }
};
