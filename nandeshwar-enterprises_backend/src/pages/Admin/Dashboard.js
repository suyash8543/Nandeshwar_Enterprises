import AdminSidebar from "../../components/AdminSidebar";
import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";
import { getContacts } from "../../services/contactService";

export default function AdminDashboard() {
    const [projects, setProjects] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        try {
            setLoading(true);
            const projectsData = await getProjects();
            const contactsData = await getContacts();
            setProjects(Array.isArray(projectsData) ? projectsData : []);
            setContacts(Array.isArray(contactsData) ? contactsData : []);
        } catch (err) {
            console.error("Error loading dashboard data:", err);
            setProjects([]);
            setContacts([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex">
            <AdminSidebar />

            <div className="flex-1 p-10 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

                {loading ? (
                    <p className="text-center text-gray-600">Loading dashboard...</p>
                ) : (
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white shadow p-6 rounded border-l-4 border-blue-500">
                            <h2 className="text-lg font-bold text-gray-700">Projects</h2>
                            <p className="text-3xl font-bold text-blue-600">{projects.length}</p>
                        </div>

                        <div className="bg-white shadow p-6 rounded border-l-4 border-green-500">
                            <h2 className="text-lg font-bold text-gray-700">Contacts</h2>
                            <p className="text-3xl font-bold text-green-600">{contacts.length}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}