import axios from "axios";
import axiosInstance from "../../../config/axios-config";
import { setAllCvsUnfiltered } from "../../slices/cvsSlice"

const getAllCvsUnfiltered = () => {
    const endpoint = axios.defaults.baseURL + "cv/dashboard"

    return async (dispatch) => {
        try {
            const response = await axiosInstance.get(endpoint);
            let data = response.data;

            return dispatch(setAllCvsUnfiltered(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllCvsUnfiltered;