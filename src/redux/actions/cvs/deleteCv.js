import axiosInstance from "../../../config/axios-config";

const deleteCv = (id) => {
    const endpoint = "http://localhost:3001/cv/delete/" + id;

    console.log("EN EL DELETE CV ACTION: ", id);

    return async () => {
        try {
            const response = await axiosInstance.put(endpoint)

            console.log("Response:", response.data);
        } catch (error) {
            console.log("Error:", error);
        }
    };
};

export default deleteCv;