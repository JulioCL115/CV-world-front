import axios from "axios";
// import { setCurrentUser } from "../../slices/usersSlice"

const getUserById = async (userId) => {
    const endpoint = axios.defaults.baseURL + "user/" + userId;

        try {
            const response = await axios.get(endpoint)
            let data = response.data;
            
            return data;
        } catch (error) {
            console.log(error);
        }
};

export default getUserById;