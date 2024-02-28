import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const postLanguage = async (languageName) => {
    const endpoint = axios.defaults.baseURL + "language" 

        try {
            await axiosInstance.post(endpoint, {name: languageName});

            return 
        } catch (error) {
            console.log(error);
        }
};

export default postLanguage;