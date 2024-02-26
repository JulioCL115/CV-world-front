import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const postLanguage = async (language) => {
    const endpoint = axios.defaults.baseURL + "language" 

        try {
            await axiosInstance.post(endpoint,{name:language});

            return 
        } catch (error) {
            console.log(error);
        }
};

export default postLanguage;