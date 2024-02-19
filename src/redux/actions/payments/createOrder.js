import axiosInstance from "../../../config/axios-config";
import { setPaymentLink } from "../../slices/paymentsSlice";

const createOrder = async (userId, paymentInfo) => {
    const endpoint = "http://localhost:3001/create-order/" + userId

    try {
        const response = await axiosInstance.post(endpoint, paymentInfo);
        const data = response.data;

        console.log(data);

        return data
    } catch (error) {
        console.log(error);
    }
};

export default createOrder;