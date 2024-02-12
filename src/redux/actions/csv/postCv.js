import axios from "axios";

const endpoint = "http://localhost:3001/cv/:userId";
const token = localStorage.getItem('token');

const postCv = (cv) => {

    return async () => {
        try {
            const response = await axios.post(endpoint, cv, {
                headers: {
                    'auth-token': token,
                    'Content-Type': 'application/json'
                }
            });

            console.log("Response:", response.data);
        } catch (error) {
            console.log("Error:", error);
        }
    };
};

export default postCv;