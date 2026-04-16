import { useParams } from "react-router-dom";

const schemesData = {
    "pm-surya-ghar": {
        title: "PM Surya Ghar: Muft Bijli Yojana",
        overview:
            "A Government of India initiative launched in 2024 to promote rooftop solar installations and provide up to 300 units of free electricity per month.",
        subsidy: [
            "₹45,000 for 1 kW",
            "₹45,000 for 2 kW",
            "₹1,08,000 for 3 kW and above",
        ],
        benefits: [
            "Reduce electricity bills",
            "Earn via net metering",
            "Clean energy solution",
            "Government subsidy support",
        ],
        eligibility: [
            "Indian residential households",
            "Valid electricity connection",
            "Available rooftop space",
        ],
        steps: [
            "Register on official portal",
            "Apply for rooftop solar",
            "Select vendor",
            "Install system",
            "Apply for subsidy",
        ],
        link: "https://pmsuryaghar.gov.in",
    },

    "solar-rooftop": {
        title: "Solar Rooftop Subsidy Scheme",
        overview:
            "MNRE initiative to promote solar energy adoption by providing subsidies on rooftop solar installations.",
        subsidy: [
            "60% subsidy up to 3 kW",
            "10% decrease per kW from 3–10 kW",
        ],
        benefits: [
            "Lower electricity bills",
            "Grid-connected system",
            "Net metering available",
            "Eco-friendly energy",
        ],
        eligibility: [
            "Residential households",
            "Housing societies",
            "RWAs",
        ],
        steps: [
            "Select registered vendor",
            "Get DISCOM approval",
            "Install solar panels",
            "Inspection & net meter",
            "Receive subsidy",
        ],
        link: "https://solarrooftop.gov.in",
    },
};

function SchemeDetails() {
    const { id } = useParams();
    const scheme = schemesData[id];

    if (!scheme) {
        return <h2 className="text-center mt-20 text-white">Scheme not found</h2>;
    }

    return (
        <div className="bg-black text-white min-h-screen px-6 py-16">
            <h1 className="text-4xl font-bold mb-6 text-green-400">
                {scheme.title}
            </h1>

            <p className="mb-6 text-gray-300">{scheme.overview}</p>

            <Section title="💰 Subsidy Details" items={scheme.subsidy} />
            <Section title="🎯 Benefits" items={scheme.benefits} />
            <Section title="👥 Eligibility" items={scheme.eligibility} />
            <Section title="📝 How to Apply" items={scheme.steps} />

            <a
                href={scheme.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 bg-green-500 px-6 py-3 rounded-lg text-black font-semibold"
            >
                Visit Official Website
            </a>
        </div>
    );
}

function Section({ title, items }) {
    return (
        <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <ul className="list-disc ml-6 text-gray-300">
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SchemeDetails;