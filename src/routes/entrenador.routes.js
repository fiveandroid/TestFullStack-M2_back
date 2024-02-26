import { Router } from "express";

import { getAllEntrenadores, getEntrenador, createEntrenador, updateEntrenador, deleteEntrenador } from "../controllers/entrenador.controller.js"

const router = Router()

router.get('/', getAllEntrenadores )
router.get('/:id', getEntrenador )
router.post('/', createEntrenador )
router.put('/:id', updateEntrenador )
router.delete('/:id', deleteEntrenador )

export default router