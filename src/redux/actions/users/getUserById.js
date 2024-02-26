import axios from "axios";
import { setCurrentUser } from "../../slices/usersSlice"

const getUserById = (userId) => {
    const endpoint = axios.defaults.baseURL + "user/" + userId;

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint)
            let data = response.data;
            
            return dispatch(setCurrentUser(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getUserById;