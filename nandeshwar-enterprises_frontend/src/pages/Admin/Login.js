import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [showOtp, setShowOtp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    // ✅ SEND OTP FUNCTION
    const handleSendOtp = async () => {
        setError("");
        setSuccess("");

        // Validate email
        if (!email.trim()) {
            setError("Please enter your email");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setError("Please enter a valid email");
            return;
        }

        setLoading(true);
        try {
            await API.post("/auth/send-otp", {
                email: email.trim()
            });


            setSuccess("OTP sent to your email");
            setShowOtp(true);
            setOtp("");

        } catch (err) {
            console.error("Error sending OTP:", err);
            setError(err.response?.data || "Server error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // ✅ VERIFY OTP FUNCTION
    const handleVerifyOtp = async () => {
        setError("");
        setSuccess("");

        // Validate OTP
        if (!otp.trim()) {
            setError("Please enter the OTP");
            return;
        }

        setLoading(true);
        try {
            const response = await API.post("/auth/verify-otp", {
                email: email.trim(),
                otp: otp.trim()
            });

            // ✅ SAVE LOGIN TOKEN AND FLAGS
            if (response.data.token) {
                sessionStorage.setItem("token", response.data.token);
            }
            sessionStorage.setItem("isAdmin", "true");
            sessionStorage.setItem("adminEmail", email.trim());

            setSuccess("Login successful!");
            setTimeout(() => {
                navigate("/admin");
            }, 500);

        } catch (err) {
            console.error("Error verifying OTP:", err);
            setError(err.response?.data || "Invalid OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="bg-gray-900 p-8 rounded-xl w-full max-w-md shadow-2xl">

                <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">
                    Admin Login
                </h2>

                {/* ERROR MESSAGE */}
                {error && (
                    <div className="mb-4 p-3 bg-red-900 border border-red-500 rounded text-red-200 text-sm">
                        {error}
                    </div>
                )}

                {/* SUCCESS MESSAGE */}
                {success && (
                    <div className="mb-4 p-3 bg-green-900 border border-green-500 rounded text-green-200 text-sm">
                        {success}
                    </div>
                )}

                {/* EMAIL INPUT */}
                {!showOtp && (
                    <>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 mb-4 rounded bg-black border border-gray-700 focus:border-green-500 focus:outline-none transition"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            onKeyPress={(e) => e.key === "Enter" && handleSendOtp()}
                        />

                        {/* SEND OTP BUTTON */}
                        <button
                            onClick={handleSendOtp}
                            disabled={loading || !email.trim()}
                            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-500 disabled:cursor-not-allowed py-3 rounded font-semibold transition"
                        >
                            {loading ? "Sending..." : "Send OTP"}
                        </button>
                    </>
                )}

                {/* OTP INPUT */}
                {showOtp && (
                    <>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            maxLength="6"
                            className="w-full p-3 mb-4 rounded bg-black border border-gray-700 focus:border-green-500 focus:outline-none transition"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                            disabled={loading}
                            onKeyPress={(e) => e.key === "Enter" && handleVerifyOtp()}
                        />

                        <button
                            onClick={handleVerifyOtp}
                            disabled={loading || !otp.trim()}
                            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-500 disabled:cursor-not-allowed py-3 rounded font-semibold transition mb-2"
                        >
                            {loading ? "Verifying..." : "Verify OTP"}
                        </button>

                        <button
                            onClick={() => {
                                setShowOtp(false);
                                setOtp("");
                                setError("");
                                setSuccess("");
                            }}
                            disabled={loading}
                            className="w-full bg-gray-700 hover:bg-gray-600 disabled:bg-gray-500 disabled:cursor-not-allowed py-3 rounded font-semibold transition"
                        >
                            Back
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}