import axios from "axios";
import { setAllCvs } from "../../slices/cvsSlice"

const getAllCvs = () => {
    const endpoint = "http://localhost:3001/cv"

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            console.log(data)

            return dispatch(setAllCvs(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllCvs;