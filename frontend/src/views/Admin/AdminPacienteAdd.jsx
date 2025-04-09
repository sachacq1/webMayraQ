import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPaciente } from "../../services/apiPacientes";

const AdminPacientesAdd = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        telefono: "",
        fechaNacimiento: "",
        info: "",
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPaciente(formData);
            navigate("/pacientes"); // redirige a la lista
        } catch (error) {
            console.error("Error al guardar paciente", error);
        }
    };

    return (
        <div className="container py-5">
            <h2 className="mb-4">Agregar Nuevo Paciente</h2>
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
                    <button type="submit" className="btn btn-primary">Guardar</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate("/pacientes")}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default AdminPacientesAdd;
