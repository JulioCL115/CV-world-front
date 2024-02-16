import axios from "axios";

const login = async (idToken) => {
    const endpoint = "http://localhost:3001/user/firebase";

    console.log("EN EL LOGIN", idToken);

    try {
        const response = await axios.post(endpoint, { idToken });

        const token = response.data.token;
        const currentUser = response.data.userFoundFiltered;

        console.log(response.data);

        localStorage.setItem('authToken', JSON.stringify(token));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        // Add this line to trigger a global event
        window.dispatchEvent(new Event('storage'));

    } catch (error) {
        console.log(error);
    }

};

export default login;


