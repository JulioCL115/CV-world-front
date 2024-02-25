import axiosInstance from "../../../config/axios-config";

const deleteCategory = async (categoryId) => {
    const endpoint = axios.defaults.baseURL + "category/delete/" + categoryId

        try {
            await axiosInstance.put(endpoint);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default deleteCategory;