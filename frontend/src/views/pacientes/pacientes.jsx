import { useState, useEffect } from "react";
import { getById } from "../../services/apiPacientes.js";
import { useParams, useNavigate } from "react-router-dom";

const PacienteDetalle = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [paciente, setPaciente] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) fetchPaciente(id);
    }, [id]);

    const formatFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        return fecha.toLocaleDateString("es-AR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    const fetchPaciente = async (id) => {
        try {
            const data = await getById(id);
            setPaciente(data);
            setLoading(false);
        } catch (error) {
            console.error("Error al obtener el paciente", error);
            setError("Error al obtener el paciente.");
            setLoading(false);
        }
    };

    if (loading) return <div className="text-center my-5">Cargando...</div>;
    if (error) return <div className="text-center my-5 text-danger">{error}</div>;

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Detalles del Paciente</h1>

            <div className="card shadow p-4">
                <h3 className="card-title fs-4 mb-3">
                    {paciente.nombre} {paciente.apellido}
                </h3>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>DNI:</strong> {paciente.dni}</li>
                    <li className="list-group-item"><strong>Email:</strong> {paciente.email}</li>
                    <li className="list-group-item"><strong>Teléfono:</strong> {paciente.telefono}</li>
                    <li className="list-group-item"><strong>Fecha de Nacimiento:</strong> {formatFecha(paciente.fechaNacimiento)}</li>
                </ul>

                {paciente.info && (
                    <div className="mt-4">
                        <h5 className="fw-bold">Información Adicional</h5>
                        <p style={{ whiteSpace: "pre-line" }}>{paciente.info}</p>
                    </div>
                )}
            </div>

            <div className="text-center mt-4">
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Volver al Inicio
                </button>
            </div>
        </div>
    );
};

export { PacienteDetalle };
