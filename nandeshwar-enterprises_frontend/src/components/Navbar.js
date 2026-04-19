import { Link, useLocation } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const linkStyle = (path) =>
        location.pathname === path
            ? "text-green-400 font-semibold"
            : "text-gray-300 hover:text-green-400 transition";

    return (
        <nav className="bg-black text-white px-4 md:px-10 py-4 flex justify-between items-center border-b border-green-900 sticky top-0 z-50">

            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="bg-green-500 text-black font-bold px-3 py-1 rounded">
                    N
                </div>
                <h1 className="text-sm md:text-xl font-semibold">
                    Nandeshwar <span className="text-green-400">Enterprises</span>
                </h1>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-8">
                <Link to="/" className={linkStyle("/")}>Home</Link>
                <Link to="/projects" className={linkStyle("/projects")}>Projects</Link>
                <Link to="/offers" className={linkStyle("/offers")}>Offers</Link>
                <Link to="/schemes" className={linkStyle("/schemes")}>Gov. Schemes</Link>
                <Link to="/contact" className={linkStyle("/contact")}>Contact</Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
                <Link
                    to="/admin"
                    className="text-gray-500 hover:text-green-400 text-lg"
                >
                    <FaUserShield />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden border-t border-green-900">
                    <Link to="/" onClick={() => setMenuOpen(false)} className={linkStyle("/")}>Home</Link>
                    <Link to="/projects" onClick={() => setMenuOpen(false)} className={linkStyle("/projects")}>Projects</Link>
                    <Link to="/offers" onClick={() => setMenuOpen(false)} className={linkStyle("/offers")}>Offers</Link>
                    <Link to="/schemes" onClick={() => setMenuOpen(false)} className={linkStyle("/schemes")}>Gov. Schemes</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)} className={linkStyle("/contact")}>Contact</Link>
                </div>
            )}
        </nav>
    );
}