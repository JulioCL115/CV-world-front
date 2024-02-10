import axios from "axios";
import { setCurrentUser } from "../../slices/usersSlice"

const register = (registerInfo) => {
    const endpoint = "http://localhost:3001/user/register"

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, registerInfo);
            let data = response.data;

            console.log(data)

            return dispatch(setCurrentUser(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default register;