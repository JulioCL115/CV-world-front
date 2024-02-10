import axios from "axios";
import { setCurrentUser } from "../../slices/usersSlice"

const login = (loginInfo) => {
    const endpoint = "http://localhost:3001/user/login"

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, loginInfo);
            let data = response.data;

            console.log(data)

            return dispatch(setCurrentUser(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default login;