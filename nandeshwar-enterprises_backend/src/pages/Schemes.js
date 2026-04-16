import { Link } from "react-router-dom";

export default function GovtSchemes() {
    const schemes = [
        {
            id: "pm-surya-ghar",
            title: "PM Surya Ghar Yojana",
            icon: "☀️",
            desc: "Get up to 40% subsidy on residential rooftop solar systems.",
        },
        {
            id: "solar-rooftop",
            title: "Solar Rooftop Subsidy Scheme",
            icon: "🏢",
            desc: "Government initiative to promote solar energy adoption.",
        },
    ];

    return (
        <div className="bg-black text-white min-h-screen px-6 md:px-10 py-20">

            {/* HEADER */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Government <span className="text-green-400">Schemes</span>
                </h1>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Explore solar subsidy programs and government initiatives.
                </p>
            </div>

            {/* SCHEME CARDS */}
            <div className="grid md:grid-cols-3 gap-8">
                {schemes.map((scheme, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-400 transition"
                    >
                        <div className="text-3xl mb-4">{scheme.icon}</div>

                        <h2 className="text-xl font-semibold mb-2">
                            {scheme.title}
                        </h2>

                        <p className="text-gray-400 text-sm mb-4">
                            {scheme.desc}
                        </p>

                        {/* ✅ FIXED */}
                        <Link
                            to={`/schemes/${scheme.id}`}
                            className="text-green-400"
                        >
                            Learn More →
                        </Link>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-20 bg-green-900/30 border border-green-700 rounded-xl p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Need Help Applying for a Scheme?
                </h2>

                <p className="text-gray-300 mb-6">
                    We assist you in documentation and subsidy approval.
                </p>

                <Link
                    to="/contact"
                    className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition"
                >
                    Contact Us
                </Link>
            </div>

        </div>
    );
}