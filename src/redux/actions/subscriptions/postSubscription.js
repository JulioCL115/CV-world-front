import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const postSubscription = async (subscription) => {
    const endpoint = axios.defaults.baseURL + "subscription";
    try {
        const { name, price, included, notIncluded } = subscription;
        await axiosInstance.post(endpoint, { name, price, included: [included], notIncluded:[notIncluded] });
        return;
    } catch (error) {
        console.log(error);
    }
};

export default postSubscription;