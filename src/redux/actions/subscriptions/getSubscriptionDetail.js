import axios from "axios";
import { setSubscriptionDetail } from "../../slices/subscriptionsSlice"

const getSubscriptionDetail = (id) => {
    const endpoint = "http://localhost:3001/subscription/" + id;

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            return dispatch(setSubscriptionDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getSubscriptionDetail;