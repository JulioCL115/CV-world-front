import axiosInstance from "../../../config/axios-config";

const createOrder = async (userId, paymentInfo) => {
    const endpoint = "https://cv-world-back-production.up.railway.app/create-order/" + userId

    try {
        console.log("Payment info: ", paymentInfo);
        const response = await axiosInstance.post(endpoint, paymentInfo);
        const data = response.data;

        console.log(data);

        return data
    } catch (error) {
        console.log(error);
    }
};

export default createOrder;
