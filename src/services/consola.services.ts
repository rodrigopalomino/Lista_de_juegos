import { Consola } from "../models/consola";

export const _getConsolas = async () => {
  try {
    const items = await Consola.findAll();
    return { status: 200, items };
  } catch (error) {
    return { status: 400, error };
  }
};
