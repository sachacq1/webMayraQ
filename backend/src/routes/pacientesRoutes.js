import { Router } from "express";
import { getAllPacientes, addPaciente, getById, updatePaciente, deletePaciente } from "../controllers/pacientesController.js";

const pacientesRoutes = Router();

pacientesRoutes.get("/", getAllPacientes);
pacientesRoutes.post("/", addPaciente);
pacientesRoutes.get("/:id", getById);
pacientesRoutes.put("/:id", updatePaciente);
pacientesRoutes.delete("/:id", deletePaciente);

export { pacientesRoutes }