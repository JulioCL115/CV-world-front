import axios from "axios";
import { setCurrentUser } from "../../slices/usersSlice";

const login = async (token) => {
    const endpoint = "http://localhost:3001/user/firebase"

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, token);
    
            const authToken = response.headers['auth-token'];
            localStorage.setItem('token', authToken);
    
            // let data = response.data;
            // localStorage.setItem('user', data);
    
        } catch (error) {
            console.log(error);
        };
    }
};


export default login;