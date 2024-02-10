import axios from "axios";

const postCv = (cv) => {
    const endpoint = "http://localhost:3001/cv/:userId"

    return async () => {
        try {
            await axios.post(endpoint, cv);

        } catch (error) {
            console.log(error);
        }
    };
};

export default postCv;