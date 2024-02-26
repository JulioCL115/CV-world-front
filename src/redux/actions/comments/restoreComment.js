import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const restoreComment = async (commentId) => {
    const endpoint = axios.defaults.baseURL + "comment/restore/" + commentId

        try {
            await axiosInstance.put(endpoint);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default restoreComment;