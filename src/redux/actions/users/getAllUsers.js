import axios from "axios";
import { setAllUsers } from "../../slices/usersSlice"
import { logDOM } from "@testing-library/react";

const getAllUsers = () => {
    const endpoint = axios.defaults.baseURL + "user"

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            console.log(data);

            return dispatch(setAllUsers(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllUsers;