import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function AdminSidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("isAdmin");
        sessionStorage.removeItem("adminEmail");
        navigate("/admin/login");
    };

    // Active link style
    const linkStyle = (path) =>
        location.pathname === path
            ? "text-green-400 font-semibold"
            : "text-gray-300 hover:text-green-400 transition";

    return (
        <>
            {/* ================= MOBILE TOP BAR ================= */}
            <div className="md:hidden flex justify-between items-center bg-gray-900 text-white px-4 py-3">
                <h2 className="text-lg font-bold">Admin</h2>
                <button onClick={() => setOpen(true)}>
                    <FaBars size={20} />
                </button>
            </div>

            {/* ================= DESKTOP SIDEBAR ================= */}
            <div className="hidden md:flex w-64 bg-gray-900 text-white min-h-screen p-5 flex-col justify-between">
                <div>
                    <h2 className="text-xl font-bold mb-6 text-green-400">
                        Admin Panel
                    </h2>

                    <ul className="space-y-4">
                        <li>
                            <Link to="/admin" className={linkStyle("/admin")}>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/projects" className={linkStyle("/admin/projects")}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/contacts" className={linkStyle("/admin/contacts")}>
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full bg-red-600 hover:bg-red-700 py-2 rounded font-semibold transition"
                >
                    Logout
                </button>
            </div>

            {/* ================= MOBILE SIDEBAR ================= */}
            {open && (
                <div className="fixed inset-0 z-50 flex">
                    
                    {/* Sidebar */}
                    <div className="w-64 bg-gray-900 text-white p-5 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-green-400">
                                    Admin Panel
                                </h2>
                                <button onClick={() => setOpen(false)}>
                                    <FaTimes size={20} />
                                </button>
                            </div>

                            <ul className="space-y-4">
                                <li>
                                    <Link to="/admin" onClick={() => setOpen(false)} className={linkStyle("/admin")}>
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/projects" onClick={() => setOpen(false)} className={linkStyle("/admin/projects")}>
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/contacts" onClick={() => setOpen(false)} className={linkStyle("/admin/contacts")}>
                                        Contacts
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="w-full bg-red-600 hover:bg-red-700 py-2 rounded font-semibold"
                        >
                            Logout
                        </button>
                    </div>

                    {/* Overlay */}
                    <div
                        className="flex-1 bg-black bg-opacity-50"
                        onClick={() => setOpen(false)}
                    ></div>
                </div>
            )}
        </>
    );
}