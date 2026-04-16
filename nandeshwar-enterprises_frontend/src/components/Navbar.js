import { Link, useLocation } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";

export default function Navbar() {
    const location = useLocation();

    const linkStyle = (path) =>
        location.pathname === path
            ? "text-green-400 font-semibold"
            : "text-gray-300 hover:text-green-400 transition";

    return (
        <nav className="bg-black text-white px-10 py-4 flex justify-between items-center border-b border-green-900 sticky top-0 z-50">

            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="bg-green-500 text-black font-bold px-3 py-1 rounded">
                    N
                </div>
                <h1 className="text-xl font-semibold">
                    Nandeshwar <span className="text-green-400">Enterprises</span>
                </h1>
            </div>

            {/* Links */}
            <div className="flex gap-8">
                <Link to="/" className={linkStyle("/")}>Home</Link>
                <Link to="/projects" className={linkStyle("/projects")}>Projects</Link>
                <Link to="/offers" className={linkStyle("/offers")}>Offers</Link>
                <Link to="/schemes" className={linkStyle("/schemes")}>Gov. Schemes</Link>
                <Link to="/contact" className={linkStyle("/contact")}>Contact</Link>
            </div>

            <Link
                to="/admin"
                className="text-gray-500 hover:text-green-400 text-lg"
                title="Admin Login"
            >
                <FaUserShield />
            </Link>
        </nav>
    );
}