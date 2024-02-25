import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const deleteComment = async (commentId) => {
    const endpoint = axios.defaults.baseURL + "comment/delete/" + commentId;

    try {
        await axiosInstance.put(endpoint);
        // Return true if the deletion is successful
        return true;
    } catch (error) {
        console.log(error);
        // Return false if there was an error
        return false;
    }
};

export default deleteComment;