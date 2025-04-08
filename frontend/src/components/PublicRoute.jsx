// components/PublicRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const PublicRoute = ({ children }) => {
    const { authToken } = useAuth();
    return authToken ? <Navigate to="/" /> : children;
};

export default PublicRoute;
