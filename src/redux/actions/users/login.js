import axios from "axios";
import { setCurrentUser } from "../../slices/usersSlice";

const login = (idToken) => {
    const endpoint = "http://localhost:3001/user/firebase";
 
  
    return async (dispatch) => {
     
      dispatch({ type: "LOGIN_REQUEST" });
  
      try {
      
        const response = await axios.post(endpoint, {idToken} );
  
        const authToken = response.headers["auth-token"];
        localStorage.setItem("token", authToken);
         console.log(response)
       
      } catch (error) {
      
        console.log(error);
      }
    };
  };
  
  export default login;