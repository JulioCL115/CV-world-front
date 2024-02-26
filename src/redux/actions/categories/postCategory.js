import { PhotoSizeSelectLargeTwoTone } from "@mui/icons-material";
import axiosInstance from "../../../config/axios-config";
import axios from "axios";

const postCategory = async (categoryName) => {
    const endpoint = axios.defaults.baseURL + "category" 

    console.log(categoryName);

        try {
            await axiosInstance.post(endpoint, {name : categoryName});

            return 
        } catch (error) {
            console.log(error);
        }
};

export default postCategory;