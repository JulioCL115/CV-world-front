import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const deleteUser = async (userId) => {
    const endpoint = axios.defaults.baseURL + "user/delete/" + userId

        try {
            await axiosInstance.put(endpoint);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default deleteUser;