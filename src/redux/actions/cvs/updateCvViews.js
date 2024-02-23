import axios from 'axios';

const updateCvViews = async (cvId) => {
    const endpoint = "http://localhost:3001/cv/updateViews" + cvId;

        try {
            await axios.put(endpoint)

        } catch (error) {
            console.log("Error:", error);
        }
};

export default updateCvViews;