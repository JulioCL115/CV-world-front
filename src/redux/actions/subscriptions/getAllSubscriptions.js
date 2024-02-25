import axios from "axios";
import { setAllSubscriptions } from "../../slices/subscriptionsSlice"

const getAllSubscriptions = () => {
    const endpoint = axios.defaults.baseURL + "subscription"

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            return dispatch(setAllSubscriptions(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllSubscriptions;