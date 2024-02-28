import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const deleteComment = async (commentId) => {
    const endpoint = axios.defaults.baseURL + "comment/delete/" + commentId;

    try {
        await axiosInstance.put(endpoint);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export default deleteComment;