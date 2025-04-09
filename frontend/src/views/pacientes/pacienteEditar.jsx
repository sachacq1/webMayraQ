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
        info: ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) fetchPaciente(id);
    }, [id]);

    const fetchPaciente = async (id) => {
        try {
            const data = await getById(id);
            setFormData({
                ...data,
                fechaNacimiento: data.fechaNacimiento?.split("T")[0] || ""
            });
            setLoading(false);
        } catch (error) {
            console.error("Error al obtener el paciente", error);
            setError("Error al obtener el paciente.");
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePaciente(id, formData);
            alert("Paciente actualizado con éxito");
            navigate(`/pacientes/${id}`);
        } catch (error) {
            alert("Error al actualizar el paciente");
            console.error(error);
        }
    };

    if (loading) return <div className="text-center my-5">Cargando...</div>;
    if (error) return <div className="text-center my-5 text-danger">{error}</div>;

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Editar Paciente</h1>

            <form onSubmit={handleSubmit} className="card shadow p-4">
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="form-control" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} className="form-control" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">DNI</label>
                    <input type="text" name="dni" value={formData.dni} onChange={handleChange} className="form-control" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} className="form-control" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Fecha de Nacimiento</label>
                    <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} className="form-control" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Información adicional</label>
                    <textarea name="info" value={formData.info} onChange={handleChange} className="form-control" rows={4}></textarea>
                </div>

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/pacientes/${id}`)}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default PacienteEditar;
