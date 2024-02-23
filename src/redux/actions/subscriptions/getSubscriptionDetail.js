import axios from "axios";
import { setSubscriptionDetail } from "../../slices/subscriptionsSlice"

const getSubscriptionDetail = (subscriptionId) => {
    const endpoint = axios.defaults.baseURL + "subscription/" + subscriptionId;

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            console.log(data);

            return dispatch(setSubscriptionDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getSubscriptionDetail;