import axios from "axios";
import { setCvDetail } from "../../slices/cvsSlice"

const getCvDetail = (id) => {
    const endpoint = "http://localhost:3001/cv/" + id;

    return async (dispatch) => {
        try {
        console.log("EN EL DISPATCH DE GETCVDETAIL");
            const response = await axios.get(endpoint);
            let data = response.data;

            return dispatch(setCvDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getCvDetail;