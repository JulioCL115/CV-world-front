import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const restoreLanguage = async (languageId) => {
    const endpoint = axios.defaults.baseURL + "language/restore/" + languageId

        try {
            await axiosInstance.put(endpoint);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default restoreLanguage;