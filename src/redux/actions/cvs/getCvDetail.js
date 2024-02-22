import axios from "axios";
import { setCvDetail } from "../../slices/cvsSlice"

const getCvDetail = (id) => {
    const endpoint = `http://localhost:3001/cv/${id}`;
    console.log("este es id",id)

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            console.log(data);

            return dispatch(setCvDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getCvDetail;