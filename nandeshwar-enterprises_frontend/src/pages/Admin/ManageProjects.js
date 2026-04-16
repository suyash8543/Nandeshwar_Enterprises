import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { getProjects, deleteProject, addProject } from "../../services/projectService";

export default function ManageProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: null
    });
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await getProjects();
            console.log("Projects loaded:", data);
            setProjects(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Error loading projects:", err);
            setError("Failed to load projects. Please try again.");
            setProjects([]);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteProject(id);
            alert("Project deleted successfully");
            load();
        } catch (err) {
            console.error("Error deleting project:", err);
            alert("Failed to delete project");
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddProject = async (e) => {
        e.preventDefault();
        setFormError("");
        setFormSuccess("");

        // Validation
        if (!formData.title.trim()) {
            setFormError("Project title is required");
            return;
        }
        if (!formData.description.trim()) {
            setFormError("Project description is required");
            return;
        }

        setSubmitting(true);
        try {
            const payload = {
                title: formData.title,
                description: formData.description,
                imageBase64: formData.image || ""
            };
            await addProject(payload);
            setFormSuccess("Project added successfully!");
            setFormData({ title: "", description: "", image: null });
            setTimeout(() => {
                setShowForm(false);
                setFormSuccess("");
                load();
            }, 1500);
        } catch (err) {
            console.error("Error adding project:", err);
            setFormError(err.message || "Failed to add project");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex">
            <AdminSidebar />

            <div className="flex-1 p-10 bg-gray-100 min-h-screen">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Projects</h1>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setShowForm(!showForm)}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                        >
                            {showForm ? "Cancel" : "+ Add Project"}
                        </button>
                        <button
                            onClick={load}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Refresh"}
                        </button>
                    </div>
                </div>

                {/* ADD PROJECT FORM */}
                {showForm && (
                    <div className="bg-white p-6 rounded shadow-lg mb-6 border-l-4 border-green-500">
                        <h2 className="text-xl font-bold mb-4 text-green-600">Add New Project</h2>
                        
                        {formError && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                {formError}
                            </div>
                        )}
                        
                        {formSuccess && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                {formSuccess}
                            </div>
                        )}

                        <form onSubmit={handleAddProject}>
                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Project Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter project title"
                                    value={formData.title}
                                    onChange={handleFormChange}
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                    disabled={submitting}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Project Description</label>
                                <textarea
                                    name="description"
                                    placeholder="Enter project description"
                                    value={formData.description}
                                    onChange={handleFormChange}
                                    rows="4"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                                    disabled={submitting}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Project Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="w-full p-3 border border-gray-300 rounded"
                                    disabled={submitting}
                                />
                                {formData.image && (
                                    <div className="mt-3">
                                        <p className="text-sm text-gray-600 mb-2">Preview:</p>
                                        <img src={formData.image} alt="preview" className="h-32 object-cover rounded border" />
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded transition"
                                disabled={submitting}
                            >
                                {submitting ? "Adding..." : "Add Project"}
                            </button>
                        </form>
                    </div>
                )}

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                {loading ? (
                    <p className="text-center text-gray-600">Loading projects...</p>
                ) : projects.length === 0 ? (
                    <p className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
                        No projects found
                    </p>
                ) : (
                    <div>
                        <p className="text-gray-600 mb-4">Total: {projects.length} project(s)</p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {projects.map((p) => (
                                <div key={p.id} className="bg-white shadow p-4 rounded border-l-4 border-green-500">
                                    <h3 className="font-bold">{p.title || "N/A"}</h3>
                                    <p>{p.description || "N/A"}</p>

                                    {p.imageBase64 && (
                                        <img
                                            src={p.imageBase64}
                                            alt="project"
                                            className="h-32 mt-2 object-cover rounded"
                                        />
                                    )}

                                    <button
                                        onClick={() => {
                                            if (window.confirm("Are you sure you want to delete this project?")) {
                                                handleDelete(p.id);
                                            }
                                        }}
                                        className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded w-full"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}