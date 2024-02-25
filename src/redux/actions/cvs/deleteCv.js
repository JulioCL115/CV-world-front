import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const deleteCv = async (cvId) => {
    const endpoint = axios.defaults.baseURL + "cv/delete/" + cvId;

    try {
        const response = await axiosInstance.put(endpoint)

        return true
    } catch (error) {
        return false
    }

};

export default deleteCv;