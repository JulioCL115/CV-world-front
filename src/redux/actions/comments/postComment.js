import axios from "axios";
import axiosInstance from "../../../config/axios-config";

const postComment = async(comment, cvId, userId) => {
    const endpoint = axios.defaults.baseURL + "comment/" + cvId + "/" + userId;

        try {
            await axiosInstance.post(endpoint, {comment: comment});

            return "Success"; // This is the value that the handleSubmit function will
        } catch (error) {
            console.log(error);
            return "Error"; // This is the value that the handleSubmit function will receive
        }
};

export default postComment;


