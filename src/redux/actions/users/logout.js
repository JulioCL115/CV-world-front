const logout = async () => {

        try {    
            localStorage.removeItem('token');
            localStorage.removeItem('currentUser');
            localStorage.removeItem('authToken');
            window.dispatchEvent(new Event('storage'));
        } catch (error) {
            console.log(error);

        };
};


export default logout;