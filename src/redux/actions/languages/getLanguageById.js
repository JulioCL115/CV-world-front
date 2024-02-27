import axios from "axios";
import axiosInstance from "../../../config/axios-config";

const getLanguageById = async (languageId) => {
    const endpoint = axios.defaults.baseURL + "language/dashboard/" + languageId;

        try {
            const response = await axiosInstance.get(endpoint);
            let data = response.data;

            return data
        } catch (error) {
            console.log(error);
        }
};

export default getLanguageById;