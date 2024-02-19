const logout = async () => {

        try {    
            localStorage.removeItem('token');
            localStorage.removeItem('currentUser');
            window.dispatchEvent(new Event('storage'));
        } catch (error) {
            console.log(error);

        };
};


export default logout;