import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { sendContact } from "../services/contactService";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setSuccess("");
        setError("");

        try {
            await sendContact(form);
            setSuccess("✅ Message sent successfully!");
            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (err) {
            console.error("Error:", err);
            setError("❌ Something went wrong.");
        }

        setLoading(false);
    };

    return (
        <div className="bg-black text-white min-h-screen px-6 py-16 flex flex-col items-center">

            {/* HEADER */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">
                    Get in <span className="text-green-400">Touch</span>
                </h1>
                <p className="text-gray-400 mt-2">
                    We’re here to help you with solar solutions 🌞
                </p>
            </div>

            {/* FORM CENTER */}
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl bg-gray-900 p-6 rounded-xl border border-gray-800 space-y-4"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black border border-gray-700 rounded focus:border-green-400 outline-none"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black border border-gray-700 rounded focus:border-green-400 outline-none"
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-black border border-gray-700 rounded focus:border-green-400 outline-none"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full p-3 bg-black border border-gray-700 rounded focus:border-green-400 outline-none"
                />

                {/* MESSAGE */}
                {success && <p className="text-green-400">{success}</p>}
                {error && <p className="text-red-400">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>

            {/* CONTACT INFO - SINGLE LINE */}
            <div className="mt-12 flex flex-wrap justify-center gap-10 text-center">


                {/* PHONE */}
                <a
                    href="tel:+916394945730"
                    className="flex items-center gap-2 hover:text-green-400 transition"
                >
                    <FaPhoneAlt className="text-green-400" />
                    <span>+91 6394945730</span>
                </a>

                {/* EMAIL */}
                <a
                    href="mailto:info@nandeshwar.com"
                    className="flex items-center gap-2 hover:text-green-400 transition"
                >
                    <FaEnvelope className="text-green-400" />
                    <span>nandeshwarenterprises1@gmail.com</span>
                </a>

                {/* WHATSAPP */}
                <a
                    href="https://wa.me/916394925730"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-green-400 transition"
                >
                    <FaWhatsapp className="text-green-400" />
                    <span>WhatsApp</span>
                </a>
                {/* INSTAGRAM */}
                <a
                    href="https://instagram.com/nandeshwar_enterprises_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-green-400 transition"
                >
                    <FaInstagram className="text-green-400" />
                    <span>Instagram</span>
                </a>

                {/* LOCATION */}
                <a
                    href="https://www.google.com/maps/search/?api=1&query=Raebareli+India"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-green-400 transition"
                >
                    <FaMapMarkerAlt className="text-green-400" />
                    <span>Raebareli, India</span>
                </a>

            </div>
        </div>
    );
}