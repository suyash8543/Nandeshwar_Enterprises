import API from "./api";

// LOGIN
export const login = async (data) => {
    const res = await API.post("/auth/login", data);

    sessionStorage.setItem("token", res.data.token);

    return res.data;
};

// LOGOUT
export const logout = () => {
    sessionStorage.removeItem("token");
};