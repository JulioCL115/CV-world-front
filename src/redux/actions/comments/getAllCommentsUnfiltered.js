import axios from "axios";
import axiosInstance from "../../../config/axios-config";
import { setAllCommentsUnfiltered } from "../../slices/commentsSlice"

const getAllCommentsUnfiltered = () => {
    const endpoint = axios.defaults.baseURL + "comment/dashboard"

    return async (dispatch) => {
        try {
            const response = await axiosInstance.get(endpoint);
            let data = response.data;

            return dispatch(setAllCommentsUnfiltered(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllCommentsUnfiltered;