import { useNavigate } from "react-router-dom";

const Panel = () => {
    const navigate = useNavigate();

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Panel Privado</h1>
            <p className="text-center mb-5">
                Bienvenido al área privada. Desde aquí podés gestionar tus pacientes, turnos, o lo que necesites.
            </p>

            <div className="row justify-content-center g-4">
                <div className="col-md-4">
                    <div className="card shadow h-100">
                        <div className="card-body d-flex flex-column justify-content-between">
                            <h5 className="card-title text-center">Ver lista de pacientes</h5>
                            <p className="card-text text-center">
                                Accedé al listado completo de tus pacientes para ver, editar o eliminar registros.
                            </p>
                            <button
                                className="btn btn-primary mt-auto"
                                onClick={() => navigate("/panel/lista")}
                            >
                                Ir al listado
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow h-100">
                        <div className="card-body d-flex flex-column justify-content-between">
                            <h5 className="card-title text-center">Agregar nuevo paciente</h5>
                            <p className="card-text text-center">
                                Ingresá los datos de un nuevo paciente para registrarlo en el sistema.
                            </p>
                            <button
                                className="btn btn-success mt-auto"
                                onClick={() => navigate("/panel/agregar")}
                            >
                                Agregar paciente
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;
