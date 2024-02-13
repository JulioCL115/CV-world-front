import axios from "axios";

const endpoint = "http://localhost:3001/user/register"

const registrationStatus = {
    status: null,
    message: null
}

const register = async (registerInfo) => {

    try {
        console.log(registerInfo);
        const response = {
            userName:registerInfo.userName,
            email:registerInfo.email,
            password:registerInfo.password
        }
        console.log(response);

        await axios.post(endpoint, response);

        registrationStatus.status = "Success";
        registrationStatus.message = "¡Te registraste con éxito!";
    } catch (error) {
        console.log(error);

        const errorStatus = error.response.status

        if (errorStatus === 409) {
            registrationStatus.status = "Fail";
            registrationStatus.message = "Ya existe un usuario con ese email"
        } else {
            registrationStatus.status = "Fail";
            registrationStatus.message = "Error del servidor"
        };
    };

    return registrationStatus
};

export default register;