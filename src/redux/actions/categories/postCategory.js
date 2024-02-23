import axiosInstance from "../../../config/axios-config";

const postCategory = async (category) => {
    const endpoint = axios.defaults.baseURL + "category" 

        try {
            await axiosInstance.post(endpoint, category);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default postCategory;