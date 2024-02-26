import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const postCategory = async (name) => {
    const endpoint = axios.defaults.baseURL + "category" 
    console.log(name);
        try {
            await axiosInstance.post(endpoint,{name:name});
            return 
        } catch (error) {
            console.log(error);
        }
};

export default postCategory;