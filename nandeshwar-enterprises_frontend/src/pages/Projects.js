import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await getProjects();
            console.log("Projects loaded on user page:", data);
            setProjects(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Error loading projects:", err);
            setError("Failed to load projects. Please try again later.");
            setProjects([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="bg-black text-white min-h-screen px-10 py-8">

                <h1 className="text-4xl font-bold mb-2">
                    Our <span className="text-green-400">Projects</span>
                </h1>
                <p className="text-gray-400 mb-10">Explore our latest solar and construction projects</p>

                {loading ? (
                    <div className="text-center py-20">
                        <p className="text-gray-400">Loading projects...</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-900 border border-red-500 text-red-200 px-6 py-4 rounded mb-6">
                        {error}
                    </div>
                ) : projects.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No projects available at the moment.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">

                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
                            >
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
                                    <h2 className="text-xl font-semibold">{project.title || "N/A"}</h2>
                                    <p className="text-gray-400 text-sm mt-2">
                                        {project.description || "No description available"}
                                    </p>

                                    
                                </div>
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </>
    );
}