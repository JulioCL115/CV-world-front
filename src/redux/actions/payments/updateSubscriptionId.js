import { setSubscriptionId } from "../../slices/paymentsSlice";

const updateSubscriptionId = (subscriptionId) => {
    return async (dispatch) => {
        try {
            console.log("POR SETEAR EL SUBSCRIPTION ID: " + subscriptionId);
            dispatch(setSubscriptionId(subscriptionId))
        } catch (error) {
            console.log(error);
        }
    };
};

export default updateSubscriptionId;