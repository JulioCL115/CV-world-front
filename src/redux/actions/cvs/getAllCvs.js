import axios from "axios";
import { setAllCvs, setNumberOfPages } from "../../slices/cvsSlice"

const getAllCvs = (filters = {}, limit, offset) => {
    const endpoint = "http://localhost:3001/cv"

    let sort = "";
    let categories = "";
    let languages = "";
    let search = "";

    if (filters.sort && filters.sort === "Más recientes") {
        sort = "date"
    } 
    if (filters.sort && filters.sort === "Más vistos") {
        sort = "views"
    };

    if (filters.categories) {
        categories = filters.categories
    }

    if (filters.languages) {
        languages = filters.languages
    }

    if (filters.search) {
        search = filters.search
    }
   
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint, {
                params: {
                    search: search,
                    sort: sort,
                    categories: categories,
                    languages: languages,
                    limit: limit,
                    offset: offset,
                }
            });
            let data = response.data;

            dispatch(setAllCvs(data.cvs));
            dispatch(setNumberOfPages(data.totalPages));

            return
        } catch (error) {
            console.log(error);
        }
    };
};

 export default getAllCvs;