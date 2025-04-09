import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Inicio = () => {
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center bg-light">
            <div className="container">
                <div className="row align-items-center text-center text-md-start">
                    {/* Texto */}
                    <div className="col-md-7 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                        <h1 className="fw-bold">
                            <span className="text-danger fs-1">Bienestar emocional </span> para una vida plena
                        </h1>
                        <p>
                            Psicóloga clínica especializada en terapia individual, de pareja y manejo del estrés.
                            Te acompaño en tu proceso de crecimiento personal con un enfoque integrador y personalizado.
                        </p>
                    </div>

                    {/* Imagen */}
                    <div className="col-md-5 d-flex justify-content-center mt-4 mt-md-0">
                        <img src="/photo2.png" alt="imagen de psi" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
