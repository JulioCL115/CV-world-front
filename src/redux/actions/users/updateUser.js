import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const updateStatus = {
    status: null,
    message: null
};

const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));


const updateUser = async (userId, user, subscriptionId) => {
    const endpoint = axios.defaults.baseURL + "user/" + userId;

    try {
        const response = await axiosInstance.put(endpoint, user, subscriptionId);
        const updatedUser = response.data.userUpdated;

        if (localStorageUser.id === updatedUser.id) {
            localStorage.setItem('currentUser', JSON.stringify(updatedUser));

            window.dispatchEvent(new Event('storage'));
        }

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