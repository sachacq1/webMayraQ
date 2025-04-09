import { useState, useEffect, useNavigate } from "react";
import { Link } from "react-router-dom";
import {
    getAllPacientes,
    addPaciente,
    updatePaciente,
    deletePaciente
} from "../../services/apiPacientes.js";



const AdminPacientesList = () => {
    const navigate = useNavigate();
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
        const fecha = paciente.fechaNacimiento?.substring(0, 10); // formato yyyy-mm-dd

        setFormData({
            ...paciente,
            fechaNacimiento: fecha || "", // asegurate que esté bien formateada
        });

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
        <div className="container py-5">
            <h1 className="text-center mb-5">Lista de Pacientes</h1>

            <div className="row g-4 mb-5">
                {pacientes.map((paciente) => (
                    <div key={paciente._id} className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/pacientes/${paciente._id}`} className="text-decoration-none text-primary">
                                        {paciente.nombre} {paciente.apellido}
                                    </Link>
                                </h5>
                                <p className="card-text"><strong>DNI:</strong> {paciente.dni}</p>
                                <div className="d-flex justify-content-end gap-2">

                                    <button
                                        onClick={() => navigate(`/pacientes/editar/${paciente._id}`)}
                                        className="btn btn-warning btn-sm"
                                    >
                                        <i className="bi bi-pencil-square me-1"></i>
                                        Editar
                                    </button>



                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(paciente._id)}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card shadow">
                <div className="card-body">
                    <h2 className="card-title mb-4">{isEditing ? "Actualizar Paciente" : "Agregar Nuevo Paciente"}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Apellido</label>
                                <input type="text" className="form-control" value={formData.apellido} onChange={(e) => setFormData({ ...formData, apellido: e.target.value })} required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">DNI</label>
                                <input type="text" className="form-control" value={formData.dni} onChange={(e) => setFormData({ ...formData, dni: e.target.value })} required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Teléfono</label>
                                <input type="text" className="form-control" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Fecha de Nacimiento</label>
                                <input type="date" className="form-control" value={formData.fechaNacimiento} onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })} required />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Información adicional</label>
                                <textarea className="form-control" rows="3" value={formData.info} onChange={(e) => setFormData({ ...formData, info: e.target.value })} placeholder="Antecedentes, observaciones, etc."></textarea>
                            </div>
                        </div>
                        <div className="mt-4 d-flex gap-2">
                            <button type="submit" className="btn btn-primary">{isEditing ? "Actualizar" : "Guardar"}</button>
                            <button type="button" className="btn btn-secondary" onClick={resetForm}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export { AdminPacientesList };
