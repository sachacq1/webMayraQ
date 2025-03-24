import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Inicio = () => {
    return (< >
        <div className="container  d-flex flex-column flex-md-row justify-content-center align-items-md-center text-center text-md-start gap-4"
            style={{
                minHeight: '100vh',
            }}>

            <div className="col md-7 d-flex flex-column justify-content-center align-items-center ">
                <h1 className="fw-bold">
                    <span className="text-danger  fs-1">Bienestar emocional </span> para una vida plena</h1>
                <p>Psicóloga clínica especializada en terapia individual, de pareja y manejo del estrés.
                    Te acompaño en tu proceso de crecimiento personal con un enfoque integrador y
                    personalizado.</p></div>

            <div className="col-md-5 d-flex justify-content-center">
                <img src="/photo2.png" alt="imagen de psi" className="img-fluid col md-5" />
            </div>
        </div>
    </>
    )
}

export default Inicio