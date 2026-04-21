import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBolt, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { getProjects } from "../services/projectService";





export default function Home() {

    const [showOptions, setShowOptions] = useState(false);
    const [projects, setProjects] = useState([]);

    // ✅ Multiple WhatsApp numbers
    const whatsappNumbers = [
        { name: "Sales", number: "916394925730" },
        { name: "Support", number: "919876543210" }
    ];

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        try {
            const data = await getProjects();
            setProjects(Array.isArray(data) ? data.slice(0, 3) : []);
        } catch (err) {
            console.error("Error loading projects:", err);
        }
    };

    return (
        
        
        <div className="bg-black text-white min-h-screen px-6 md:px-10 py-20">

            {/* ================= HERO SECTION ================= */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <span className="bg-green-900 text-green-400 px-3 py-1 rounded-full text-sm">
                        ☀️ Trusted Solar Solutions
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
                        Building <span className="text-green-400">Excellence</span> <br />
                        Across Every Project
                    </h1>

                    <p className="text-gray-400 mt-4 max-w-md">
                        Nandeshwar Enterprises delivers premium solar panel installation,
                        solar street lights, and sustainable energy solutions backed by
                        years of experience.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <Link
                            to="/projects"
                            className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 flex items-center gap-2"
                        >
                            <FaBolt /> View Projects →
                        </Link>

                        <Link
                            to="/contact"
                            className="border border-gray-600 px-6 py-3 rounded-lg hover:border-green-400"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="relative">
                    <img
                        src="/solar.jpg"
                        alt="Solar Installation"
                        className="rounded-xl shadow-lg w-full h-[350px] object-cover"
                    />
                    <div className="absolute inset-0 bg-green-500/10 rounded-xl blur-2xl"></div>
                </div>
            </div>

            {/* ================= STATS ================= */}
            <div className="flex flex-wrap justify-center md:justify-start gap-10 mt-16 text-center">
                <div>
                    <h2 className="text-3xl font-bold text-green-400">200+</h2>
                    <p className="text-gray-400">Projects Completed</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-green-400">2+</h2>
                    <p className="text-gray-400">Years Experience</p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-green-400">30+</h2>
                    <p className="text-gray-400">Expert Team</p>
                </div>
            </div>

            {/* ================= SERVICES ================= */}
            <div className="mt-20">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    Our <span className="text-green-400">Services</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-xl font-semibold text-yellow-400">
                            Solar Panels
                        </h3>
                        <p className="text-gray-400 mt-3">
                            High-efficiency solar panel installation for homes and industries.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-xl font-semibold text-yellow-400">
                            Solar Lighting
                        </h3>
                        <p className="text-gray-400 mt-3">
                            Street lights, garden lights, and smart solar lighting systems.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-xl font-semibold text-yellow-400">
                            Maintenance
                        </h3>
                        <p className="text-gray-400 mt-3">
                            Regular servicing and performance optimization.
                        </p>
                    </div>

                </div>
            </div>

            {/* ================= FEATURED PROJECTS ================= */}
            <div className="mt-20">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    Our <span className="text-green-400">Featured Projects</span>
                </h2>

                {projects.length > 0 ? (
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
                                {project.imageBase64 ? (
                                    <img
                                        src={project.imageBase64}
                                        alt={project.title}
                                        className="h-56 w-full object-cover"
                                    />
                                ) : (
                                    <div className="h-56 w-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                                        <span className="text-gray-500">No Image</span>
                                    </div>
                                )}

                                <div className="p-5">
                                    <h3 className="text-xl font-semibold">{project.title || "N/A"}</h3>
                                    <p className="text-gray-400 mt-3 text-sm line-clamp-2">
                                        {project.description || "No description available"}
                                    </p>

                                    <Link
                                        to="/projects"
                                        className="mt-4 text-green-400 hover:text-green-300 hover:underline inline-block transition"
                                    >
                                        View Details →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-400">No featured projects available</p>
                        <Link to="/projects" className="text-green-400 hover:underline mt-3 inline-block">
                            View All Projects →
                        </Link>
                    </div>
                )}

                <div className="text-center mt-8">
                    <Link
                        to="/projects"
                        className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition inline-block"
                    >
                        View All Projects →
                    </Link>
                </div>
            </div>

            {/* ================= PDF CATALOGUE ================= */}
            <div className="mt-24">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Our <span className="text-green-400">Product Catalogue</span>
                </h2>

                <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                    <div className="text-center">
                        <div className="mb-6">
                            <svg className="w-24 h-24 mx-auto text-green-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14,2H6A2,2 0 0,0 4,4V20a2,2 0 0,0 2,2h12a2,2 0 0,0 2,-2V8l-8,-6m0,2h6v4H6V4h8m-2,11H8V7h8v8h-4z" />
                            </svg>
                            <h3 className="text-2xl font-semibold text-white mb-2">Solar Products Catalogue</h3>
                            <p className="text-gray-400 mb-6">Download our comprehensive catalogue featuring all solar panels, lighting solutions, and energy systems</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/Nandeshwar Enterprises Catalogue.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                </svg>
                                Read Now
                            </a>

                            <a
                                href="/Nandeshwar Enterprises Catslogue.pdf"
                                download
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                </svg>
                                Download PDF
                            </a>
                        </div>

                        <p className="text-gray-500 text-sm mt-6">File size: ~5MB | Format: PDF | Pages: Comprehensive guide to our products</p>
                    </div>
                </div>
            </div>



            {/* ================= LOCATION ================= */}
            <div className="mt-24">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Our <span className="text-green-400">Location</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* MAP */}
                    <div className="w-full h-80 rounded overflow-hidden border border-gray-800">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.8574765891486!2d79.21152!3d25.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d9c81e9e9e9e9%3A0x0!2sRaebareli%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* CONTACT */}
                    <div className="space-y-6">

                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-green-400" />
                            <p>Raebareli, Uttar Pradesh</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-green-400" />
                            <p>+91 6394925730</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaInstagram className="text-green-400" />
                            <a
                                href="https://instagram.com/nandeshwar_enterprises_"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-green-400 transition"
                            >
                                @nandeshwar_enterprises_
                            </a>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex gap-4 mt-6 relative">

                            {/* MAP BUTTON */}
                            <a
                                href="https://maps.app.goo.gl/yu7iCx6w9y3R7sze6"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-blue-500 px-4 py-2 rounded"
                            >
                                Get Direction
                            </a>


                            {/* WHATSAPP BUTTON */}
                            <button
                                onClick={() => setShowOptions(!showOptions)}
                                className="bg-green-500 px-4 py-2 rounded text-black flex items-center gap-2"
                            >
                                <FaWhatsapp /> WhatsApp
                            </button>

                            {/* DROPDOWN */}
                            {showOptions && (
                                <div className="absolute top-12 left-0 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-4 w-48 z-50">

                                    {whatsappNumbers.map((item, index) => (
                                        <a
                                            key={index}
                                            href={`https://wa.me/${item.number}?text=Hi, I want solar services`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block px-3 py-2 hover:bg-green-500 hover:text-black rounded"
                                        >
                                            {item.name}
                                        </a>
                                    ))}

                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>

            {/* ================= FLOATING WHATSAPP ================= */}
            <a
                href="https://wa.me/916394925730?text=Hi, I am interested in solar services"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
            >
                <FaWhatsapp className="text-black text-xl" />
            </a>

        </div>
    );
}