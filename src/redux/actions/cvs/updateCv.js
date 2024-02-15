import axiosInstance from "../../../config/axios-config";

const updateCv = (id, cv) => {
    const endpoint = "http://localhost:3001/cv/" + id;

    return async () => {
        try {
            const response = await axiosInstance.post(endpoint, cv)

            console.log("Response:", response.data);
        } catch (error) {
            console.log("Error:", error);
        }
    };
};

export default updateCv;