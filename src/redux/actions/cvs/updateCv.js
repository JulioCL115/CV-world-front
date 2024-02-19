import axiosInstance from "../../../config/axios-config";

const updateStatus = {
    status: null,
    message: null
};

const updateCv = async (cvId, cv) => {
    const endpoint = "http://localhost:3001/cv/" + cvId;

        try {
            await axiosInstance.put(endpoint, cv)

            updateStatus.status = "Success";
            updateStatus.message = "¡Tus cambios de guardaron con éxito!";
        } catch (error) {
            console.log("Error:", error);

            updateStatus.status = "Fail";
            updateStatus.message = "No se pudieron guardar tus cambios";
        }
        return updateStatus;
};

export default updateCv;