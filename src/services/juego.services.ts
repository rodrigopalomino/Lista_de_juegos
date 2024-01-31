import { Juego as JuegoInterface } from "../interface/juego";
import { Juego } from "../models/juego";
import { Juego_Genero } from "../models/juego_genero";
import { Juego_Consola } from "../models/juego_consola";
import sequelize from "../db/connection";
import { Consola } from "../models/consola";

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
      where (g.genero in (:generos) or g.genero is not null )
      and (c.consola in (:consolas) or c.consola is not null )
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
      group_concat(distinct g.genero separator ',') as generos,
      group_concat(distinct g.genero separator ',') as consola
      from juego j
      join juego_consola jc on jc.juego_id = j.juego_id
      join consola c on c.consola_id = jc.consola_id
      join juego_genero jg on jg.juego_id= j.juego_id
      join genero g on g.genero_id = jg.genero_id
      where  j.nombre = :nombre`,
      { replacements: { nombre: nombre } }
    );

    const juego = consulta as JuegoInterface[];

    return { status: 200, item: juego };
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
