import axiosInstance from "../../../config/axios-config";

const creationStatus = {
    status: null,
    message: null
};

const postCv = async (userId, cv) => {
    const endpoint = "http://localhost:3001/cv/" + userId;

        try {
            await axiosInstance.post(endpoint, cv);

            creationStatus.status = "Success";
            creationStatus.message = "¡Tu CV se creó con éxito!";
        } catch (error) {
            console.log(error);

            creationStatus.status = "Fail";
            creationStatus.message = "Faltan datos obligatorios";
        };

    return creationStatus;
};

export default postCv;