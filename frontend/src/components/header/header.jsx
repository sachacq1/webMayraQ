import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

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

                {/* Botón hamburguesa */}
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
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>

                    {/* Botón o dropdown según login */}
                    {isAuthenticated ? (
                        <div className="dropdown ms-3">
                            <button
                                className="btn btn-outline-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {user || "Panel"}

                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link className="dropdown-item" to="/panel/lista">
                                        Lista de pacientes
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/panel/agregar">
                                        Agregar paciente
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                                        Cerrar sesión
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link to="/login" className="btn btn-outline-secondary ms-3">
                            Iniciar sesión
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
