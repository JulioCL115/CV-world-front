import axios from "axios";

const endpoint = "https://cv-world-back-production.up.railway.app/user/register"

const registrationStatus = {
    status: null,
    message: null
};

const register = async (registerInfo) => {

    try {
        await axios.post(endpoint, registerInfo);

        registrationStatus.status = "Success";
        registrationStatus.message = "¡Te registraste con éxito!";
    } catch (error) {
        console.log(error);

        const errorStatus = error.response.status;

        if (errorStatus === 409) {
            registrationStatus.status = "Fail";
            registrationStatus.message = "Ya existe un usuario con ese email"
        } else {
            registrationStatus.status = "Fail";
            registrationStatus.message = "Error del servidor"
        };
    };

    return registrationStatus;
};

export default register;
