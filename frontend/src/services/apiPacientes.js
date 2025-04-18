import axios from "axios";

const apiPacientes = axios.create({
    baseURL: "https://webmayraq.onrender.com",
    withCredentials: true
});

apiPacientes.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

const getAllPacientes = async () => {
    try {
        const response = await apiPacientes.get("/api/pacientes/admin");
        return response.data
    } catch (error) {
        throw new Error(error.message)

    }
};

const addPaciente = async (newPaciente) => {
    try {
        const response = await apiPacientes.post("/api/pacientes/admin", newPaciente);
        alert("Paciente agregado con exito")
    } catch (error) {
        console.log("error al crear paciente", error);
        alert("Error al crear el paciente")
        throw new Error(error.message)
    }
};

const updatePaciente = async (id, paciente) => {
    try {
        const response = await apiPacientes.put(`/api/pacientes/admin/${id}`, paciente);
        alert("Paciente actualizado con exito")
        return response.data

    } catch (error) {
        console.error("error al actualizar paciente", error);
        throw new Error(error.message)
    }
};

const deletePaciente = async (id) => {
    try {
        const response = await apiPacientes.delete(`/api/pacientes/admin/${id}`);
        return response.data
    } catch (error) {
        console.error("error al eliminar paciente", error);
        throw new Error(error.message)
    }
};

const getById = async (id) => {
    try {
        const response = await apiPacientes.get(`/api/pacientes/admin/${id}`);
        return response.data
    } catch (error) {
        console.error("error al obtener paciente", error);
        throw new Error(error.message)
    }
}

export { getAllPacientes, addPaciente, updatePaciente, deletePaciente, getById }