import { Router } from "express";
import {
  createJuego,
  getJuego,
  getJuegos,
  searchJuego,
} from "../controllers/juego.controllers";

const router = Router();

router.get("/", getJuegos);
router.get("/:nombre", getJuego);
router.post("/create", createJuego);
router.get("/search/:nombre", searchJuego);

export { router };
