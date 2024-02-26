import axios from "axios";

const login = async (idToken) => {
    const endpoint = `${axios.defaults.baseURL}user/firebase`;

    try {
        const response = await axios.post(endpoint, { idToken });

        const token = response.data.token;
        const currentUser = response.data.userFoundFiltered;

        localStorage.setItem('authToken', JSON.stringify(token));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        // Add this line to trigger a global event
        window.dispatchEvent(new Event('storage'));
    } catch (error) {
        console.log(error);
    }

};

export default login;


