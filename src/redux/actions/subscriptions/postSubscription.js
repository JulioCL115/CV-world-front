import axiosInstance from "../../../config/axios-config";

const postSubscription = async (subscription) => {
    const endpoint = axios.defaults.baseURL + "subscription" 

        try {
            await axiosInstance.post(endpoint, subscription);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default postSubscription;