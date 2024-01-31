import { Router } from "express";
import { getConsolas } from "../controllers/consola.controllers";

const router = Router();

router.get("", getConsolas);

export { router };
