import { Router } from "express";
import {
  createJuego,
  getJuego,
  getJuegos,
} from "../controllers/juego.controllers";

const router = Router();

router.get("/", getJuegos);
router.get("/:nombre", getJuego);
router.post("/create", createJuego);

export { router };
