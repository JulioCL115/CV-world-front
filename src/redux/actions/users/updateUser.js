import axiosInstance from "../../../config/axios-config";

const updateStatus = {
    status: null,
    message: null
};

const updateUser = async (userId, user, subscriptionId) => {
    const endpoint = "http://localhost:3001/user/" + userId;

        try {
            await axiosInstance.put(endpoint, user, subscriptionId)
            
            updateStatus.status = "Success";
            updateStatus.message = "¡Tu usuario se actualizó con éxito!";
        } catch (error) {
            console.log(error);

            const errorStatus = error.response.status;

            if (errorStatus === 409) {
                updateStatus.status = "Fail";
                updateStatus.message = "Ya existe un usuario con ese email"
            } else {
                updateStatus.status = "Fail";
                updateStatus.message = "Error del servidor"
            };
        }

    return updateStatus;
};

export default updateUser;