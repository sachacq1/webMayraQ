import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getById, updatePaciente } from "../../services/apiPacientes";

const PacienteEditar = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        telefono: "",
        fechaNacimiento: "",
        info: "",
    });

    useEffect(() => {
        const fetchPaciente = async () => {
            try {
                const data = await getById(id);
                setFormData({
                    ...data,
                    fechaNacimiento: new Date(data.fechaNacimiento).toISOString().split("T")[0],
                });
            } catch (error) {
                console.error("Error al obtener paciente:", error);
            }
        };
        fetchPaciente();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePaciente(id, formData);
            navigate(`/pacientes/${id}`);
        } catch (error) {
            console.error("Error al actualizar paciente:", error);
        }
    };

    return (
        <div className="container py-5">
            <div className="card shadow p-4">
                <h2 className="text-center mb-4">Editar Paciente</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Apellido</label>
                            <input type="text" className="form-control" name="apellido" value={formData.apellido} onChange={handleChange} required />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">DNI</label>
                            <input type="text" className="form-control" name="dni" value={formData.dni} onChange={handleChange} required />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Fecha de Nacimiento</label>
                            <input type="date" className="form-control" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Información Adicional</label>
                            <textarea className="form-control" rows="4" name="info" value={formData.info} onChange={handleChange} placeholder="Antecedentes, observaciones, etc."></textarea>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-success me-2">Guardar Cambios</button>
                        <button type="button" className="btn btn-secondary" onClick={() => navigate(`/pacientes/${id}`)}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { PacienteEditar };
