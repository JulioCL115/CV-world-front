import axios from "axios";
import axiosInstance from "../../../config/axios-config";
import { setAllUsersUnfiltered } from "../../slices/usersSlice"

const getAllUsersUnfiltered = () => {
    const endpoint = axios.defaults.baseURL + "user/dashboard"

    return async (dispatch) => {
        try {
            const response = await axiosInstance.get(endpoint);
            let data = response.data;

            console.log(data);

            return dispatch(setAllUsersUnfiltered(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllUsersUnfiltered;