import API from "./api";

export const getProjects = async () => {
    try {
        const res = await API.get("/projects");
        return res.data;
    } catch (err) {
        console.error("Error fetching projects:", err);
        throw err;
    }
};

export const addProject = async (data) => {
    try {
        const res = await API.post("/projects", data);
        console.log("Project added successfully:", res.data);
        return res.data;
    } catch (err) {
        console.error("Error adding project:", err);
        throw err;
    }
};

export const deleteProject = async (id) => {
    try {
        await API.delete(`/projects/${id}`);
    } catch (err) {
        console.error("Error deleting project:", err);
        throw err;
    }
};