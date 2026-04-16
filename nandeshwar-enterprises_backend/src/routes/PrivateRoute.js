import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const isAdmin = sessionStorage.getItem("isAdmin");

    // ❌ Not logged in → redirect
    if (!isAdmin) {
        return <Navigate to="/admin/login" />;
    }

    // ✅ Logged in → allow access
    return children;
}