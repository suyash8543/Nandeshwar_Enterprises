import { useState } from "react";
import API from "../../services/api";

export default function Signup() {
    const [data, setData] = useState({ email: "", password: "" });

    const handleSignup = async () => {
        await API.post("/auth/register", data);
        alert("Admin created");
    };

    return (
        <div className="flex justify-center mt-20">
            <div className="bg-white p-6 shadow rounded w-80">
                <h2 className="text-xl mb-4">Admin Signup</h2>

                <input
                    placeholder="Email"
                    className="border p-2 w-full mb-2"
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />

                <input
                    placeholder="Password"
                    type="password"
                    className="border p-2 w-full mb-2"
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />

                <button
                    onClick={handleSignup}
                    className="bg-green-600 text-white w-full p-2"
                >
                    Signup
                </button>
            </div>
        </div>
    );
}