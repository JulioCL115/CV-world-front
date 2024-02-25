import axios from "axios";
import { setAllComments } from "../../slices/commentsSlice"

const getAllComments = () => {
    const endpoint = axios.defaults.baseURL + "comment"

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            return dispatch(setAllComments(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllComments;