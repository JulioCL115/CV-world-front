import axiosInstance from "../../../config/axios-config";

const postLanguage = async (language) => {
    const endpoint = axios.defaults.baseURL + "language" 

        try {
            await axiosInstance.post(endpoint, language);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default postLanguage;