import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const restoreCv = async (cvId) => {
    const endpoint = axios.defaults.baseURL + "cv/restore/" + cvId;

    try {
        await axiosInstance.put(endpoint)

        return 
    } catch (error) {
        console.log(error)
    }

};

export default restoreCv;