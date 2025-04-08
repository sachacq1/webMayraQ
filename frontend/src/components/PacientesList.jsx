import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { getAllPacientes } from "../services/apiPacientes.js";
import { useAuth } from "../context/authContext.jsx";

const PacientesList = () => {
    const [pacientes, setPacientes] = useState([]);
    const navigate = useNavigate(); // Utilizar useNavigate
    const { role } = useAuth(); // obtener rol

    useEffect(() => {
        fetchPacientes();
    }, []);

    const fetchPacientes = async () => {
        try {
            const data = await getAllPacientes();
            setPacientes(data);

        } catch (error) {
            console.error("Error al obtener pacientes:", error);
        }
    };

    // Función para redirigir a la página de detalles de un paciente
    const handleGoToDetails = (id) => {
        navigate(`/pacientes/${id}`); // Redirige a la página de detalles de un paciente con el ID proporcionado
    };

    return (
        <>
            return (
            <div className="container my-4">
                <h1 className="h3 mb-4">Lista de Pacientes</h1>

                <div className="row">
                    {pacientes.map((paciente) => (
                        <div key={paciente._id} className="col-md-4 mb-4">
                            <div
                                className="card h-100 shadow-sm"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleGoToDetails(paciente._id)}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">{paciente.nombre}</h5>
                                    <p className="card-text">
                                        <strong>DNI:</strong> {paciente.dni}
                                    </p>
                                    <p className="card-text">
                                        <strong>Email:</strong> {paciente.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            );

        </>
    )

}

