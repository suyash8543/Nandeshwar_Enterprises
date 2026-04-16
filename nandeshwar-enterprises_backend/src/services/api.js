import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5028/api",
    headers: {
        "Content-Type": "application/json" // ✅ IMPORTANT
    }
});



// 🔐 Attach JWT token automatically (for admin)
API.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;