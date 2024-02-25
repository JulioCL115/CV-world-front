import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const deleteCv = async(cvId) => {
    const endpoint = axios.defaults.baseURL + "cv/delete/" + cvId;

    try {
        const response = await axiosInstance.put(endpoint)

        console.log("Response:", response.data);
    } catch (error) {
        console.log("Error:", error);
    }

};

export default deleteCv;