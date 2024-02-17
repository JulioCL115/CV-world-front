import axios from "axios";
import { setAllCvs } from "../../slices/cvsSlice"

const getAllCvs = (filters = {}, limit, offset) => {
    const endpoint = "http://localhost:3001/cv"

    let sort = "";
    let categories = "";
    let languages = "";
    let subscriptions = "";
    let search = "";

    if (filters.sort && filters.sort === "Más recientes") {
        sort = "Más recientes"
    } 
    if (filters.sort && filters.sort === "Más vistos") {
        sort = "Más vistos"
    };

    if (filters.categories) {
        categories = filters.categories
    }

    if (filters.languages) {
        languages = filters.languages
    }

    if (filters.subscriptions) {
        subscriptions = filters.subscriptions
    }

    if (filters.search) {
        search = filters.search
    }
   
    return async (dispatch) => {
        try {
            console.log("haciendo el dispatch de getAllCvs");
            const response = await axios.get(endpoint, {
                params: {
                    search: search,
                    sort: sort,
                    categories: categories,
                    languages: languages,
                    subscriptions: subscriptions,
                    limit: limit,
                    page: offset,
                }
            });
            let data = response.data;

            dispatch(setAllCvs(data.cvs));
            return data.numberOfPages
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllCvs;