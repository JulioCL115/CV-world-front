import { setCurrentUser } from "../../slices/usersSlice";

const logout = async () => {

    return async (dispatch) => {
        try {    
            localStorage.removeItem('token');
    
            dispatch(setCurrentUser(null));

        } catch (error) {
            console.log(error);

        };
    }
};


export default logut;