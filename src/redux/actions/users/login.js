import axios from "axios";

const login = async (idToken) => {
    const endpoint = "http://localhost:3001/user/firebase";

    console.log("EN EL LOGIN", idToken);

        try {
            const response = await axios.post(endpoint, idToken);
            

            const authToken = response.headers['auth-token'];
            console.log(authToken);
            localStorage.setItem('token', authToken);

        } catch (error) {
            console.log(error);
        }

};

export default login;


