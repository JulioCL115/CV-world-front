import axios from "axios";
import { setCvDetail } from "../../slices/cvsSlice"

const getCvDetail = () => {
    const endpoint = "http://localhost:3001/cv/:cvId"

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            console.log(data)

            return dispatch(setCvDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getCvDetail;