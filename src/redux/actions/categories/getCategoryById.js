import axios from "axios";
import axiosInstance from "../../../config/axios-config";

const getCategoryById = async (categoryId) => {
    const endpoint = axios.defaults.baseURL + "category/dashboard/" + categoryId;

        try {
            const response = await axiosInstance.get(endpoint);
            let data = response.data;

            return data
        } catch (error) {
            console.log(error);
        }
};

export default getCategoryById;