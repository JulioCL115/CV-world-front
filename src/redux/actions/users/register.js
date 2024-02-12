import axios from "axios";

const register = async (registerInfo) => {
    const endpoint = "http://localhost:3001/user/register"

    const registrationStatus = {
        status: null,
        message: null
    }
    try {
        console.log(registerInfo);

        await axios.post(endpoint, registerInfo);

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