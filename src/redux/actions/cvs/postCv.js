import axiosInstance from "../../../config/axios-config";

const postCv = (userId, cv) => {

    const endpoint = "http://localhost:3001/cv/" + userId;

    return async () => {
        try {
            const response = await axiosInstance.post(endpoint, cv)

            console.log("Response:", response.data);
        } catch (error) {
            console.log("Error:", error);
        }
    };
};

export default postCv;