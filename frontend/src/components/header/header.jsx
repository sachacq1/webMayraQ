import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                {/* Logo */}
                <div className="d-flex align-items-center">
                    <i className="bi bi-suit-heart fs-3 text-danger rounded-circle"
                        style={{
                            backgroundColor: '#f8d7da',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                    </i>
                    <h1 className="p-2 h3">Mayra <span className="text-danger h3">Quinteros</span></h1>
                </div>

                {/* Botón del menú hamburguesa */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menú */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#inicio">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicios">Servicios</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#sobremi">Sobre mí</a>
                        </li> <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>

                    {/* Botón de iniciar sesión */}
                    <Link to="/login" className="btn btn-outline-secondary ms-3">Iniciar sesión</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
