import axiosInstance from "../../../config/axios-config";
import axios from "axios";


const creationStatus = {
    status: null,
    message: null
};

const postCv = async (userId, cv) => {
    const endpoint = axios.defaults.baseURL + "cv/" + userId;

        try {
            await axiosInstance.post(endpoint, cv);

            creationStatus.status = "Success";
            creationStatus.message = "¡Tu CV se creó con éxito!";
        } catch (error) {
            console.log(error);
            
            const errorStatus = error.response?.status;

            if (errorStatus === 409) {
                creationStatus.status = "Fail";
                creationStatus.message = "Ya existe un cv con características similares"
            } else {
                creationStatus.status = "Fail";
                creationStatus.message = "Error del servidor"
            };
        };

    return creationStatus;
};

export default postCv;