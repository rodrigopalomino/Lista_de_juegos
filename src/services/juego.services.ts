import { Juego as JuegoInterface } from "../interface/juego";
import { Juego } from "../models/juego";
import { Juego_Genero } from "../models/juego_genero";
import { Juego_Consola } from "../models/juego_consola";
import sequelize from "../db/connection";
import { Op } from "sequelize";

export const _getJuegos = async (
  inicio: number,
  cantidad: number,
  generos: string[],
  consolas: string[]
) => {
  try {
    const consulta = await sequelize.query(
      `
    select
      j.juego_id,
      j.nombre,
      j.precio,
      j.imagen,
      j.desarrolladora,
      j.descripcion
      from juego j
      join juego_genero jg on jg.juego_id = j.juego_id
      join genero g on g.genero_id = jg.genero_id
      join juego_consola jc on jc.juego_id = j.juego_id
      join consola c on c.consola_id = jc.consola_id
      ${
        consolas.length === 0 && generos.length !== 0
          ? "where g.genero in (:generos)"
          : generos.length === 0 && consolas.length !== 0
          ? "where c.consola in (:consolas)"
          : generos.length !== 0 && consolas.length !== 0
          ? "where g.genero in (:generos) and c.consola in (:consolas) "
          : ""
      }
      group by juego_id
      limit :cantidad
      offset :inicio;`,
      {
        replacements: {
          inicio,
          cantidad,
          generos,
          consolas,
        },
      }
    );

    const juegos = consulta as JuegoInterface[];

    return { status: 200, items: juegos[0] };
  } catch (error) {
    console.log(error);
    return { status: 400, error };
  }
};

export const _getJuego = async (nombre: string) => {
  try {
    const consulta = await sequelize.query(
      `
    select	
      j.nombre,
      j.imagen,
      j.descripcion,
      j.desarrolladora,
      group_concat(distinct g.genero separator ',') as generos,
      group_concat(distinct c.consola separator ',') as consolas
      from juego j
      join juego_consola jc on jc.juego_id = j.juego_id
      join consola c on c.consola_id = jc.consola_id
      join juego_genero jg on jg.juego_id= j.juego_id
      join genero g on g.genero_id = jg.genero_id
      where  j.nombre = :nombre`,
      { replacements: { nombre: nombre } }
    );

    const juego = consulta[0] as JuegoInterface[];

    return { status: 200, item: juego[0] };
  } catch (error) {
    return { status: 400, error };
  }
};

export const _createJuego = async (
  juego: JuegoInterface,
  generos: number[],
  consolas: number[]
) => {
  const transaction = await sequelize.transaction();

  try {
    //Verificar si ya existe un juego con el mismo nombre
    if (await Juego.findOne({ where: { nombre: juego.nombre } })) {
      return { msg: "ya existe", status: 400 };
    }

    //crear el juego
    const newJuego = await Juego.create(juego);

    //crear la relacion de juego-genero
    for (const genero of generos) {
      await Juego_Genero.create({
        juego_id: newJuego.juego_id!,
        genero_id: genero,
      });
    }

    //creat la relacion de juego-consola
    for (const consola of consolas) {
      await Juego_Consola.create({
        juego_id: newJuego.juego_id!,
        consola_id: consola,
      });
    }

    await transaction.commit();
    return { msg: `juego ${newJuego.nombre} creado con exito`, status: 200 };
  } catch (error) {
    console.log("=================================================");
    console.log(error);

    await transaction.rollback();
    return { msg: "_createJuego_error", error, status: 400 };
  }
};

export const _searchJuego = async (
  nombre: string,
  inicio: number,
  cantidad: number
) => {
  try {
    const juegos = await Juego.findAll({
      where: { nombre: { [Op.like]: `%${nombre}%` } },
      limit: cantidad,
      offset: inicio,
    });

    return { status: 200, items: juegos };
  } catch (error) {
    return { status: 400, error };
  }
};
