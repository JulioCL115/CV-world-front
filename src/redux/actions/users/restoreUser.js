import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const restoreUser = async (userId) => {
    const endpoint = axios.defaults.baseURL + "user/restore/" + userId

        try {
            await axiosInstance.put(endpoint);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default restoreUser;