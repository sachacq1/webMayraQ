import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllPacientes, deletePaciente } from "../../services/apiPacientes";

const AdminPacientesList = () => {
    const [pacientes, setPacientes] = useState([]);
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

    return (
        <div className="container pt-5 mt-5">
            <h1 className="text-center mb-4">Lista de Pacientes</h1>
            <div className="mb-4 text-end">
                <button onClick={() => navigate("/panel/agregar")} className="btn btn-success">
                    + Agregar Paciente
                </button>
            </div>

            <div className="row g-4">
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
                                    <button onClick={() => navigate(`/pacientes/editar/${paciente._id}`)} className="btn btn-warning btn-sm">
                                        Editar
                                    </button>
                                    <button onClick={() => handleDelete(paciente._id)} className="btn btn-danger btn-sm">
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPacientesList;
