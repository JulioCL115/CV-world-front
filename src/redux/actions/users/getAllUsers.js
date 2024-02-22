import axios from "axios";
import { setAllUsers } from "../../slices/usersSlice"

const getAllUsers = () => {
    const endpoint = "http://localhost:3001/user"

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            return dispatch(setAllUsers(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllUsers;