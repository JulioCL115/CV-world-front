import axios from "axios";

const getCvDetail = async (cvId) => {
    const endpoint = axios.defaults.baseURL + "cv/" + cvId;

    try {
        const response = await axios.get(endpoint);
        let data = response.data;

        return data
    } catch (error) {
        console.log(error);
    }
};


export default getCvDetail;