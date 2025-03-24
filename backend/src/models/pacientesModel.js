import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

// Modelo Paciente
const Paciente = sequelize.define("pacientes", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'El nombre es requerido' },
            len: { args: [3], msg: 'El nombre debe tener al menos 3 caracteres' } // CORRECCIÓN: Cambié `length` por `len`
        },
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'El apellido es requerido' },
            len: { args: [3], msg: 'El apellido debe tener al menos 3 caracteres' } // CORRECCIÓN: Cambié `length` por `len`
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: { msg: 'El email es requerido' },
            isEmail: { msg: 'El email debe ser válido' }
        },
    },
    phone: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    info: {
        type: DataTypes.STRING,
    },
}, {

    timestamps: true,
    createdAt: 'created_at',  // Usar el nombre de columna de MySQL
    updatedAt: 'updated_at',  // Usar el nombre de columna de MySQL
    tableName: 'pacientes'
}
);

// CRUD

// Obtener todos los pacientes
const getAllPacientes = async () => {
    try {
        return await Paciente.findAll();
    } catch (error) {
        console.error("Error al obtener los pacientes:", error);
        throw new Error("No se pudieron obtener los pacientes");
    }
};

// Agregar un paciente
const addPaciente = async (paciente) => {
    try {
        // Verificar si el paciente con ese email ya existe
        const existingPaciente = await Paciente.findOne({ where: { email: paciente.email } });
        if (existingPaciente) {
            throw new Error("Ya existe un paciente con ese email");
        }
        const newPaciente = await Paciente.create(paciente);
        return newPaciente;

    } catch (error) {
        console.error("Error al agregar el paciente:", error);
        throw new Error("No se pudo agregar el paciente");
    }
};


// Obtener un paciente por ID
const getByIdPaciente = async (id) => {
    try {
        const paciente = await Paciente.findByPk(id);
        return paciente;
    } catch (error) {
        console.error(`Error al obtener el paciente con id ${id}:`, error);
        throw new Error("No se pudo encontrar el paciente");
    }
};

const getByDniPaciente = async (dni) => {
    try {
        const paciente = await Paciente.findOne({ where: { dni: dni } });
        return paciente;
    } catch (error) {
        console.error(`Error al obtener el paciente con email ${dni}:`, error);
        throw new Error("No se pudo encontrar el paciente");
    }
}


// Actualizar un paciente
const updatePaciente = async (id, paciente) => {
    try {
        const [updatedCount] = await Paciente.update(paciente, { where: { id } });
        if (updatedCount === 0) {
            throw new Error(`Paciente con id ${id} no encontrado`);
        }
        return updatedCount;
    } catch (error) {
        console.error(`Error al actualizar el paciente con id ${id}:`, error);
        throw new Error("No se pudo actualizar el paciente");
    }
};

// Eliminar un paciente
const deletePaciente = async (id) => {
    try {
        const deletedCount = await Paciente.destroy({ where: { id } });
        if (deletedCount === 0) {
            throw new Error(`Paciente con id ${id} no encontrado`);
        }
        return deletedCount;
    } catch (error) {
        console.error(`Error al eliminar el paciente con id ${id}:`, error);
        throw new Error("No se pudo eliminar el paciente");
    }
};

export default { getAllPacientes, addPaciente, getByIdPaciente, updatePaciente, deletePaciente, getByDniPaciente };
