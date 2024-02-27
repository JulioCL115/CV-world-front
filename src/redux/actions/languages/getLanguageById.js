import axios from "axios";
import axiosInstance from "../../../config/axios-config";
import { setLanguageDetail } from "../../slices/languagesSlice"

const getLanguageById = async (languageId) => {
    const endpoint = axios.defaults.baseURL + "language/dashboard/" + languageId;

        try {
            const response = await axiosInstance.get(endpoint);
            let data = response.data;

            console.log(data);

            return data
        } catch (error) {
            console.log(error);
        }
};

export default getLanguageById;