import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const updateStatus = {
    status: null,
    message: null
};

<<<<<<< HEAD

const updateUser = async (userId, user, subscriptionId) => {
    const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
const userLocalId = localStorageUser?.id
console.log("id de user login",userLocalId)
=======
const updateUser = async (userId, user, subscriptionId) => {
    const localStorageUser = JSON.parse(localStorage.getItem('currentUser'));
    const userLocalId = localStorageUser?.id

>>>>>>> 6af05825b34897bfeb04cbf4ea6bffed7eb8128e
    const endpoint = "http://localhost:3001/user/" + userId;
    try {
        const response = await axiosInstance.put(endpoint, user, subscriptionId);
        const updatedUser = response.data.userUpdated;
<<<<<<< HEAD
        console.log( "este es el local en actions",updatedUser.id)
        console.log( "este es el local en actions",userId)
=======

>>>>>>> 6af05825b34897bfeb04cbf4ea6bffed7eb8128e
        if (userLocalId === updatedUser.id) {
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

