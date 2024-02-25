import axiosInstance from "../../../config/axios-config";

const deleteSubscription = async (subscriptionId) => {
    const endpoint = axios.defaults.baseURL + "subscription/delete/" + subscriptionId

        try {
            await axiosInstance.put(endpoint);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default deleteSubscription;