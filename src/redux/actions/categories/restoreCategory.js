import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const restoreCategory = async (categoryId) => {
    const endpoint = axios.defaults.baseURL + "category/restore/" + categoryId

        try {
            await axiosInstance.put(endpoint);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default restoreCategory;