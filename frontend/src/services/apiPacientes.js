import axios from "axios";

const apiPacientes = axios.create({
    baseURL: "https://webmayraq.onrender.com",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});

const getAllPacientes = async () => {
    try {
        const response = await apiPacientes.get("/pacientes");
        return response.data
    } catch (error) {
        throw new Error(error.message)

    }
};

const addPaciente = async (newPaciente) => {
    try {
        const response = await apiPacientes.post("/pacientes/admin", newPaciente);
        alert("Paciente agregado con exito")
    } catch (error) {
        console.log("error al crear paciente", error);
        alert("Error al crear el paciente")
        throw new Error(error.message)
    }
};

const updatePaciente = async (id, paciente) => {
    try {
        const response = await apiPacientes.put(`/pacientes/admin/${id}`, paciente);
        alert("Paciente actualizado con exito")
        return response.data

    } catch (error) {
        console.error("error al actualizar paciente", error);
        throw new Error(error.message)
    }
};

const deletePaciente = async (id) => {
    try {
        const response = await apiPacientes.delete(`/pacientes/admin/${id}`);
        return response.data
    } catch (error) {
        console.error("error al eliminar paciente", error);
        throw new Error(error.message)
    }
};

const getById = async (id) => {
    try {
        const response = await apiPacientes.get(`/pacientes/admin/${id}`);
        return response.data
    } catch (error) {
        console.error("error al obtener paciente", error);
        throw new Error(error.message)
    }
}

export { getAllPacientes, addPaciente, updatePaciente, deletePaciente, getById }