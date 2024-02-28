import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const updateLanguage = async (languageId, name) => {
    const endpoint = axios.defaults.baseURL + "language/" + languageId

        try {
            await axiosInstance.put(endpoint, { name : name });

            return 
        } catch (error) {
            console.log(error);
        }
};

export default updateLanguage;