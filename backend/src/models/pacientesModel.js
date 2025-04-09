import mongoose from "mongoose";

// Modelo Paciente
const PacienteSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    info: {
        type: String,
    },
},
    {
        versionKey: false
    })

const Paciente = mongoose.model("Paciente", PacienteSchema);
// CRUD

// Obtener todos los pacientes
const getAllPacientes = async () => {
    try {
        const pacientes = await Paciente.find();
        return (pacientes);
    } catch (error) {
        console.error("Error en getAllPacientes:", error);
        throw new Error("Error al obtener los pacientes");
    }
};


const addPaciente = async (paciente) => {
    try {
        const newPaciente = new Paciente(paciente);
        await newPaciente.save();
        return newPaciente;
    } catch (error) {
        throw new Error("Error al agregar el paciente: " + error.message);
    }
};

const getByIdPaciente = async (id) => {
    try {
        const paciente = await Paciente.findById(id);
        if (!paciente) throw new Error("Paciente no encontrado");
        return paciente;
    } catch (error) {
        throw new Error("Error al obtener el paciente: " + error.message);
    }
};


const getByDniPaciente = async (dni) => {
    try {
        const paciente = await Paciente.findOne({ dni });
        return paciente;
    } catch (error) {
        console.error(`Error al obtener el paciente con dni ${dni}:`, error);
        throw new Error("No se pudo encontrar el paciente");
    }
};

const updatePaciente = async (id, paciente) => {
    try {
        const updatedPaciente = await Paciente.findByIdAndUpdate(id, paciente, { new: true });
        return updatedPaciente;
    } catch (error) {
        throw new Error("Error al actualizar el paciente: " + error.message);
    }
};

const deletePaciente = async (id) => {
    try {
        const deletedPaciente = await Paciente.findByIdAndDelete(id);
        if (!deletedPaciente) throw new Error("No se pudo eliminar el paciente");
        return deletedPaciente;
    } catch (error) {
        throw new Error("Error al eliminar el paciente: " + error.message);
    }
};

export default {
    getAllPacientes,
    addPaciente,
    getByIdPaciente,
    updatePaciente,
    deletePaciente,
    getByDniPaciente,
};
