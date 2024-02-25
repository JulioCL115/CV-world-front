import axiosInstance from "../../../config/axios-config";

const updateSubscription = async (subscriptionId, subscription) => {
    const endpoint = axios.defaults.baseURL + "subscription/" + subscriptionId

        try {
            await axiosInstance.put(endpoint, subscription);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default updateSubscription;