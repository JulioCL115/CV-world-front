import axios from "axios";
import { setCurrentUser } from "../../slices/usersSlice"

const getUserByEmail = (email) => {
    const endpoint = "http://localhost:3001/user/";

    return async (dispatch) => {
        try {
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

export default getUserByEmail;