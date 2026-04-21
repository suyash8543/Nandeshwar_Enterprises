import API from "./api";

// ✅ GET PROJECTS
export const getProjects = async () => {
    try {
        const response = await API.get("/projects");

        // 🔥 SAFETY CHECK
        if (!response || !response.data) {
            return [];
        }

        return response.data;
    } catch (err) {
        console.error("Error fetching projects:", err);

        // 🔥 BETTER ERROR MESSAGE
        throw err.response?.data?.message || "Failed to fetch projects";
    }
};

// ✅ ADD PROJECT
export const addProject = async (data) => {
    try {
        const response = await API.post("/projects", data);

        return response.data;
    } catch (err) {
        console.error("Error adding project:", err);

        throw err.response?.data?.message || "Failed to add project";
    }
};

// ✅ DELETE PROJECT
export const deleteProject = async (id) => {
    try {
        const response = await API.delete(`/projects/${id}`);

        return response.data; // optional but good
    } catch (err) {
        console.error("Error deleting project:", err);

        throw err.response?.data?.message || "Failed to delete project";
    }
};