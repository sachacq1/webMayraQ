import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";

const Header = () => {
    const { authToken, logout } = useAuth();
    const isAuthenticated = !!authToken;
    const navigate = useNavigate();
    const location = useLocation();

    const isHome = location.pathname === "/";

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const renderNavItem = (label, anchor) => {
        return isHome ? (
            <a className="nav-link" href={`#${anchor}`}>{label}</a>
        ) : (
            <Link className="nav-link" to={`/#${anchor}`}>{label}</Link>
        );
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

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            {renderNavItem("Inicio", "inicio")}
                        </li>
                        <li className="nav-item">
                            {renderNavItem("Servicios", "servicios")}
                        </li>
                        <li className="nav-item">
                            {renderNavItem("Sobre mí", "sobremi")}
                        </li>
                        <li className="nav-item">
                            {renderNavItem("Contacto", "contacto")}
                        </li>
                    </ul>
                </div>

                <div className="ms-3 d-flex">
                    {isAuthenticated ? (
                        <div className="dropdown">
                            <button
                                className="btn btn-outline-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                            >
                                Panel
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link className="dropdown-item" to="/panel/lista">Lista de pacientes</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/panel/agregar">Agregar paciente</Link>
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
                        <Link to="/login" className="btn btn-outline-secondary">
                            Iniciar sesión
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
