import axios from "axios";
import { setCvDetail } from "../../slices/cvsSlice"

const getCvDetail = async (id) => {
    const endpoint = "http://localhost:3001/cv/" + id;

    try {
        const response = await axios.get(endpoint);
        let data = response.data;

        return data
    } catch (error) {
        console.log(error);
    }
};


export default getCvDetail;