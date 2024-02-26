import axios from "axios";
import axiosInstance from "../../../config/axios-config";
import { setAllLanguagesUnfiltered } from "../../slices/languagesSlice"

const getAllLanguagesUnfiltered = () => {
    const endpoint = axios.defaults.baseURL + "language/dashboard"

    return async (dispatch) => {
        try {
            const response = await axiosInstance.get(endpoint);
            let data = response.data;

            return dispatch(setAllLanguagesUnfiltered(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllLanguagesUnfiltered;