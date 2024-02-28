import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const updateStatus = {
    status: null,
    message: null
};

const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));

const updateUser = async (userId, user, subscriptionId) => {
    const endpoint = "http://localhost:3001/user/" + userId;
    try {
        const response = await axiosInstance.put(endpoint, user, subscriptionId);
        const updatedUser = response.data.userUpdated;
        console.log( "este es el local en actions", updatedUser.id)

        if (updatedUser.id === localStorageUser.id) {
            localStorage.removeItem('currentUser');
            localStorage.setItem('currentUser', JSON.stringify(updatedUser));
            console.log("se actualizo el local storage en la actions")
            window.dispatchEvent(new Event('storage'));
        }

        updateStatus.status = "Success";
        updateStatus.message = "¡Tu usuario se actualizó con éxito!";
        return { updatedUser, updateStatus };
    } catch (error) {
        console.log(error);

        const errorStatus = error.response?.status;

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