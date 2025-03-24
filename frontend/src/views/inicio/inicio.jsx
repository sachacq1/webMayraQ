import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Inicio = () => {
    return (< >
        <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-lg-start"
            style={{ height: '100vh' }}>

            <div className="col md-7 justify-content-center m-auto   ">
                <h1 className="fw-bold">
                    <span className="text-danger  fs-1">Bienestar emocional </span> para una vida plena</h1>
                <p>Psicóloga clínica especializada en terapia individual, de pareja y manejo del estrés.
                    Te acompaño en tu proceso de crecimiento personal con un enfoque integrador y
                    personalizado.</p></div>

            <div className="col-md-5 mt-4 mt-lg-0 d-flex align-items-center">
                <img src="/photo2.png" alt="imagen de psi" className="img-fluid col md-5" />
            </div>
        </div>
    </>
    )
}

export default Inicio