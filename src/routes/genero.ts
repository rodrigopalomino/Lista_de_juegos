import { Router } from "express";
import { getGeneros } from "../controllers/genero.controllers";

const router = Router();

router.get("", getGeneros);

export { router };
