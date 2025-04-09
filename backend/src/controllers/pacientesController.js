import Pacientes from "../models/pacientesModel.js";

const getAllPacientes = async (req, res) => {
    try {
        const pacientes = await Pacientes.getAllPacientes();
        res.status(200).json(pacientes); // Código 200 está bien para obtener los recursos
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los pacientes" })
    }
};

const addPaciente = async (req, res) => {
    try {
        const { nombre, apellido, dni, email, telefono, fechaNacimiento, info } = req.body;

        const existingPaciente = await Pacientes.getByDniPaciente(dni);
        if (existingPaciente) {
            return res.status(400).json({ error: "Ya existe un paciente con ese dni" });
        }
        const newPaciente = await Pacientes.addPaciente({ nombre, apellido, dni, email, telefono, fechaNacimiento, info });
        res.status(201).json(newPaciente);
    } catch (error) {
        res.status(500).json({ error: "Error al agregar el paciente" });
        console.log(error)
    }
};

const getById = async (req, res) => {
    try {
        const paciente = await Pacientes.getByIdPaciente(req.params.id);
        if (!paciente) {
            return res.status(404).json({ error: "Paciente no encontrado" }); // Caso en el que el paciente no existe
        }
        res.status(200).json(paciente);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el paciente" });
    }
};

const updatePaciente = async (req, res) => {
    try {
        const { nombre, apellido, dni, email, telefono, fechaNacimiento, info } = req.body;

        // Verificar si el paciente existe
        const pacienteExistente = await Pacientes.getByIdPaciente(req.params.id);
        if (!pacienteExistente) {
            return res.status(404).json({ error: "Paciente no encontrado" });
        }

        const updatedPaciente = await Pacientes.updatePaciente(req.params.id, { nombre, apellido, dni, email, telefono, fechaNacimiento, info });
        res.status(200).json({ message: "Paciente actualizado con éxito" });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el paciente" });
        console.log(error)
    }
};

const deletePaciente = async (req, res) => {
    try {
        // Verificar si el paciente existe
        const pacienteExistente = await Pacientes.getByIdPaciente(req.params.id);
        if (!pacienteExistente) {
            return res.status(404).json({ error: "Paciente no encontrado" });
        }

        const deletedPaciente = await Pacientes.deletePaciente(req.params.id);
        res.status(200).json({ message: "Paciente eliminado con éxito" }); // Mensaje claro después de eliminar
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el paciente" });
    }
};

export { getAllPacientes, addPaciente, getById, updatePaciente, deletePaciente };
