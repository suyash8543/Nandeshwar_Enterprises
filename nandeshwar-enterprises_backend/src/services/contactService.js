import API from "./api";

// SEND contact form
export const sendContact = async (data) => {
    try {
        const res = await API.post("/contact", data);
        return res.data;
    } catch (err) {
        console.error("Error sending contact:", err);
        throw err;
    }
};

// GET contacts (admin)
export const getContacts = async () => {
    try {
        const res = await API.get("/contact");
        return res.data;
    } catch (err) {
        console.error("Error fetching contacts:", err);
        throw err;
    }
};