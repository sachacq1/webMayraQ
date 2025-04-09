import { AdminPacientesList } from "../Admin/dashboard";

<div className="container py-5">
    <div className="row justify-content-center">
        <div className="col-lg-10">
            <h1 className="text-center mb-4">Lista de Pacientes</h1>
            <div className="card p-3 shadow-sm">
                <AdminPacientesList />
            </div>

            <div className="text-center mt-4">
                <button className="btn btn-danger" onClick={handleLogout}>
                    Cerrar sesión
                </button>
            </div>
        </div>
    </div>
</div>