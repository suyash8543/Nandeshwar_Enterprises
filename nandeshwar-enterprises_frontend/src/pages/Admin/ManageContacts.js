import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { getContacts } from "../../services/contactService";


export default function ManageContacts() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await getContacts();
            console.log("Contacts loaded:", data);
            setContacts(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Error loading contacts:", err);
            setError("Failed to load contacts. Please try again.");
            setContacts([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex">
            <AdminSidebar />

            <div className="flex-1 p-10 bg-gray-100 min-h-screen">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Contacts</h1>
                    <button
                        onClick={load}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Refresh"}
                    </button>
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                {loading ? (
                    <p className="text-center text-gray-600">Loading contacts...</p>
                ) : contacts.length === 0 ? (
                    <p className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
                        No contacts found
                    </p>
                ) : (
                    <div>
                        <p className="text-gray-600 mb-4 font-semibold">Total: {contacts.length} contact(s)</p>
                        {[...contacts].reverse().map((c, index) => (
                            <div key={c.id || index} className="bg-white p-4 mb-3 shadow rounded border-l-4 border-blue-500 hover:shadow-lg transition">
                                <div className="flex items-start justify-between mb-2">
                                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        #{contacts.length - index}
                                    </span>
                                </div>
                                <p className="mb-2"><b>Name:</b> {c.name || "N/A"}</p>
                                <p className="mb-2"><b>Email:</b> <a href={`mailto:${c.email}`} className="text-blue-600 hover:underline">{c.email || "N/A"}</a></p>
                                <p className="mb-2"><b>Phone:</b> <a href={`tel:${c.phone}`} className="text-blue-600 hover:underline">{c.phone || "N/A"}</a></p>
                                <p className="mb-2"><b>Message:</b></p>
                                <p className="bg-gray-50 p-3 rounded border border-gray-200 text-gray-700 whitespace-pre-wrap">{c.message || "N/A"}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}