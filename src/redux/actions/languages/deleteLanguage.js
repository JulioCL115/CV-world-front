import axiosInstance from "../../../config/axios-config";

const deleteLanguage = async (languageId) => {
    const endpoint = axios.defaults.baseURL + "language/delete/" + languageId

        try {
            await axiosInstance.put(endpoint);

            return 
        } catch (error) {
            console.log(error);
        }
};

export default deleteLanguage;