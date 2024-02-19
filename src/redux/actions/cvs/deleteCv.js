import axiosInstance from "../../../config/axios-config";

const deleteCv = async(id) => {
    const endpoint = "http://localhost:3001/cv/delete/" + id;

    try {
        const response = await axiosInstance.put(endpoint)

        console.log("Response:", response.data);
    } catch (error) {
        console.log("Error:", error);
    }

};

export default deleteCv;