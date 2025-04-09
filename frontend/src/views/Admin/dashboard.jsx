import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    getAllPacientes,
    addPaciente,
    updatePaciente,
    deletePaciente
} from "../../services/apiPacientes.js";

const AdminPacientesList = () => {
    const [pacientes, setPacientes] = useState([]);
    const [formData, setFormData] = useState({
        _id: "",
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        telefono: "",
        fechaNacimiento: "",
        info: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPacientes();
    }, []);

    const fetchPacientes = async () => {
        try {
            const data = await getAllPacientes();
            setPacientes(data);
        } catch (error) {
            console.error("Error al obtener los pacientes", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await updatePaciente(formData._id, formData);
            } else {
                await addPaciente(formData);
            }
            fetchPacientes();
            resetForm();
        } catch (error) {
            console.error("Error al guardar paciente", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de eliminar el paciente?")) {
            try {
                await deletePaciente(id);
                fetchPacientes();
            } catch (error) {
                console.error("Error al eliminar paciente", error);
            }
        }
    };

    const handleEdit = (paciente) => {
        setFormData(paciente);
        setIsEditing(true);
    };

    const resetForm = () => {
        setFormData({
            _id: "",
            nombre: "",
            apellido: "",
            dni: "",
            email: "",
            telefono: "",
            fechaNacimiento: "",
            info: "",
        });
        setIsEditing(false);
    };

    return (
        <div className="container">
            <h1 className="title is-3">Lista de Pacientes</h1>

            <div className="columns is-multiline">
                {pacientes.map((paciente) => (
                    <div key={paciente._id} className="column is-4">
                        <div className="card">
                            <div className="card-content">
                                <h3 className="title is-5">
                                    <Link to={`/paciente/${paciente._id}`} className="has-text-link">
                                        {paciente.nombre} {paciente.apellido}
                                    </Link>
                                </h3>
                                <div className="buttons is-right mt-3">
                                    <button className="button is-warning" onClick={() => handleEdit(paciente)}>Editar</button>
                                    <button className="button is-danger" onClick={() => handleDelete(paciente._id)}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="box mt-6">
                <h2 className="subtitle is-4">{isEditing ? "Actualizar Paciente" : "Agregar Nuevo Paciente"}</h2>
                <form onSubmit={handleSubmit}>
                    <label className="label">Nombre</label>
                    <input className="input" type="text" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} required />

                    <label className="label">Apellido</label>
                    <input className="input" type="text" value={formData.apellido} onChange={(e) => setFormData({ ...formData, apellido: e.target.value })} required />

                    <label className="label">DNI</label>
                    <input className="input" type="text" value={formData.dni} onChange={(e) => setFormData({ ...formData, dni: e.target.value })} required />

                    <label className="label">Email</label>
                    <input className="input" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />

                    <label className="label">Teléfono</label>
                    <input className="input" type="text" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} required />

                    <label className="label">Fecha de Nacimiento</label>
                    <input className="input" type="date" value={formData.fechaNacimiento} onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })} required />

                    <label className="label">Información adicional</label>
                    <textarea className="textarea" value={formData.info} onChange={(e) => setFormData({ ...formData, info: e.target.value })} placeholder="Antecedentes, observaciones, etc."></textarea>

                    <div className="buttons mt-4">
                        <button className="button is-primary" type="submit">{isEditing ? "Actualizar Paciente" : "Guardar Paciente"}</button>
                        <button className="button is-light" type="button" onClick={resetForm}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { AdminPacientesList };
