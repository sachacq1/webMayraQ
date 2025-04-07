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
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
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
        const pacientes = await Paciente.findAll();
        return pacientes;
    } catch (error) {
        throw new Error("Error al obtener los pacientes");
    }
};

// Agregar un paciente
const addPaciente = async (paciente) => {
    try {
        const newPaciente = new Paciente(paciente);
        await newPaciente.save();
        return newPaciente;
    } catch (error) {
        throw new Error("Error al agregar el paciente" + error.message);
    }
};


// Obtener un paciente por ID
const getByIdPaciente = async (id) => {
    try {
        const paciente = await Paciente.findById(id);
        return paciente;
    } catch (error) {
        throw new Error("Error al obtener el paciente" + error.message);
    }
};

const getByDniPaciente = async (dni) => {
    try {
        const paciente = await Paciente.findOne(dni);
        return paciente;
    } catch (error) {
        console.error(`Error al obtener el paciente con email ${dni}:`, error);
        throw new Error("No se pudo encontrar el paciente");
    }
}


// Actualizar un paciente
const updatePaciente = async (id, paciente) => {
    try {
        const updatedPaciente = await Paciente.update(id, paciente, { new: true });
        return updatedPaciente
    } catch (error) {
        throw new Error("Error al actualizar el paciente" + error.message);
    }
}
// Eliminar un paciente
const deletePaciente = async (id) => {
    try {
        const deletePaciente = await Paciente.delete(id);
        if (!deletePaciente) throw new Error("No se pudo eliminar el paciente")
        return deletePaciente
    } catch (error) {
        throw new Error("Error al eliminar el paciente" + error.message);

    }
};

export default { getAllPacientes, addPaciente, getByIdPaciente, updatePaciente, deletePaciente, getByDniPaciente };
