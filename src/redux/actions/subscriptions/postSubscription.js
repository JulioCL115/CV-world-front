import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const postSubscription = async (subscription) => {
    const endpoint = axios.defaults.baseURL + "subscription" 

    console.log(subscription);

        try {
            await axiosInstance.post(endpoint, subscription);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default postSubscription;