import axios from "axios";
import { setToken } from "../../slices/authSlice";

const login = async (token) => {
    const endpoint = "http://localhost:3001/user/login"

    // const loginStatus = {
    //     status: null,
    //     message: null
    // }
    try {
        await axios.post(endpoint, token);

        const authToken = response.headers['auth-token'];
        localStorage.setItem('token', authToken);
        // return dispatch(setToken(authToken));

        // loginStatus.status = "Success";
    } catch (error) {
        console.log(error);

        // loginStatus.status = "Fail";
        // loginStatus.message = "Contraseña o mail incorrectos"
    };

    return loginStatus
};


export default login;