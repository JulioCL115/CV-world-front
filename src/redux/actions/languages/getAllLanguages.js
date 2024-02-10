import axios from "axios";
import { setAllLanguages } from "../../slices/languagesSlice"

const getAllLanguages = () => {
    const endpoint = "http://localhost:3001/language"

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            console.log(data)

            return dispatch(setAllLanguages(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllLanguages;