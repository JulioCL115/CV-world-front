import axios from "axios";

const login = async (loginInfo) => {
    const endpoint = "http://localhost:3001/user/login"

    const loginStatus = {
        status: null,
        message: null
    }

    try {
        await axios.post(endpoint, loginInfo);

        loginStatus.status = "Success";
    } catch (error) {
        console.log(error);

        loginStatus.status = "Fail";
        loginStatus.message = "Contraseña o mail incorrectos"
    };

    return loginStatus
};


export default login;