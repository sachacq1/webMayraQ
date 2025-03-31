import { Router } from "express";
import { getAllPacientes, addPaciente, getById, updatePaciente, deletePaciente } from "../controllers/pacientesController.js";
import { auth, isadmin } from "../middlewares/authMiddleware.js";

const pacientesRoutes = Router();


// Rutas publicas
pacientesRoutes.get("/", getAllPacientes);

// Rutas privadas
pacientesRoutes.use(auth)

pacientesRoutes.get("/admin", isadmin, getAllPacientes);
pacientesRoutes.get("/admin/:id", isadmin, getById);
pacientesRoutes.post("/admin", isadmin, addPaciente);
pacientesRoutes.put("/admin/:id", isadmin, updatePaciente);
pacientesRoutes.delete("/admin/:id", isadmin, deletePaciente);

pacientesRoutes.get("/:id", getById);

export { pacientesRoutes }