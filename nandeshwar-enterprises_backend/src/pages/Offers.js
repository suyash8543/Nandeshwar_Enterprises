import { Link } from "react-router-dom";

export default function Offers() {
    const offers = [
        {
            title: "Residential Solar Package",
            discount: "Up to 40% OFF",
            desc: "Complete rooftop solar installation for homes with subsidy support.",
            price: "Starting ₹45,000",
        },
        {
            title: "Commercial Solar Solutions",
            discount: "Save up to 60%",
            desc: "High-capacity solar systems for businesses to reduce electricity costs.",
            price: "Custom Pricing",
        },
        {
            title: "Solar Street Light Setup",
            discount: "Special Offer",
            desc: "Government-approved solar street lighting solutions for rural & urban areas.",
            price: "Starting ₹8,000/unit",
        },
    ];

    return (
        <div className="bg-black text-white min-h-screen px-6 md:px-10 py-20">

            {/* HEADER */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Our <span className="text-green-400">Offers</span>
                </h1>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Explore our latest solar deals and save big on installation and services.
                </p>
            </div>

            {/* OFFER CARDS */}
            <div className="grid md:grid-cols-3 gap-8">
                {offers.map((offer, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-400 transition"
                    >
                        {/* BADGE */}
                        <span className="text-xs bg-green-500 text-black px-3 py-1 rounded-full">
                            {offer.discount}
                        </span>

                        {/* TITLE */}
                        <h2 className="text-xl font-semibold mt-4">
                            {offer.title}
                        </h2>

                        {/* DESC */}
                        <p className="text-gray-400 text-sm mt-2 mb-4">
                            {offer.desc}
                        </p>

                        {/* PRICE */}
                        <p className="text-green-400 font-bold mb-4">
                            {offer.price}
                        </p>

                        {/* BUTTON */}
                        <Link
                            to="/contact"
                            className="bg-green-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-green-400 transition inline-block"
                        >
                            Get Offer
                        </Link>
                    </div>
                ))}
            </div>

            {/* CTA SECTION */}
            <div className="mt-20 bg-green-900/30 border border-green-700 rounded-xl p-10 text-center">

                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Want a Custom Solar Solution?
                </h2>

                <p className="text-gray-300 mb-6">
                    Contact us today to get a personalized quote and maximize your savings.
                </p>

                <Link
                    to="/contact"
                    className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition"
                >
                    Request Quote
                </Link>

            </div>

        </div>
    );
}