import axios from "axios";
import { setCurrentUser } from "../../slices/usersSlice"

const setCurrentUser = (user) => {

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            console.log(data)

            return dispatch(setCurrentUser(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default setCurrentUser;