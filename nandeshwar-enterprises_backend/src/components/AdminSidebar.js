import { Link, useNavigate } from "react-router-dom";

export default function AdminSidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear all session data
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("isAdmin");
        sessionStorage.removeItem("adminEmail");
        
        // Redirect to login
        navigate("/admin/login");
    };

    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen p-5 flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

                <ul className="space-y-4">
                    <li>
                        <Link to="/admin">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/admin/contacts">Contacts</Link> {/* ✅ IMPORTANT */}
                    </li>
                </ul>
            </div>

            {/* LOGOUT BUTTON */}
            <button
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-700 py-2 rounded font-semibold transition"
            >
                Logout
            </button>
        </div>
    );
}