import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const updateCategory = async (categoryId, name) => {
    const endpoint = axios.defaults.baseURL + "category/" + categoryId

        try {
            await axiosInstance.put(endpoint, { name : name });

            return 
        } catch (error) {
            console.log(error);
        }
};

export default updateCategory;