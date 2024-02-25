import axiosInstance from "../../../config/axios-config";

const updateCategory = async (categoryId, category) => {
    const endpoint = axios.defaults.baseURL + "category/" + categoryId

        try {
            await axiosInstance.put(endpoint, category);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default updateCategory;