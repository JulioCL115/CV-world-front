import axios from 'axios';

const updateCvViews = async (cvId) => {
    const endpoint = axios.defaults.baseURL + "cv/updateView/" + cvId;

    console.log(cvId);
        try {
            await axios.put(endpoint)


        } catch (error) {
            console.log("Error:", error);
        }
};

export default updateCvViews;