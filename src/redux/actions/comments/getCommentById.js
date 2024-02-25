import axios from "axios";
import { setCommentDetail } from "../../slices/commentsSlice"

const getCommentById = (commentId) => {
    const endpoint = axios.defaults.baseURL + "comment/" + commentId

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            return dispatch(setCommentDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getCommentById;