import axios from "axios";
import { setCurrentUser } from "../../slices/usersSlice"

const getCurrentUser = (email) => {
    const endpoint = "http://localhost:3001/user/";

    return async (dispatch) => {
        try {
            console.log(email);
            const response = await axios.get(endpoint, {
                params: {
                    email: email,
                }
            });
            let data = response.data;

            return dispatch(setCurrentUser(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getCurrentUser;