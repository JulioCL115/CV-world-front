import axios from "axios";
import { setAllCvs,setTotalPage } from "../../slices/cvsSlice"
import { async } from "q";

const getAllCvs = (filters = {}, limit= 2, currentPage=1 ) => {
  console.log("este es el page en la actions",currentPage)
    return async (dispatch) => {
    try {
      const queryParams = {
        page: encodeURIComponent(currentPage),
        limit: encodeURIComponent(limit),
      };
  
      if (filters.categories) {
        queryParams.categories = encodeURIComponent(filters.categories);
      }
  
      if (filters.languages) {
        queryParams.languages = encodeURIComponent(filters.languages);
      }
  
      if (filters.sort) {
        queryParams.sort = encodeURIComponent(filters.sort);
      }
  
      if (filters.search) {
        queryParams.search = encodeURIComponent(filters.search);
      }
  
      const queryString = Object.entries(queryParams)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
  
      const url = `http://localhost:3001/cv?${queryString}`;
      console.log("esta es la url de get all ",url);
  
      
        const response = await axios.get(url);
        console.log(response);
        const data = response.data;
        dispatch(setAllCvs(data.cvs));
        dispatch(setTotalPage(data.totalPages));
      
    } catch (error) {
      console.error("Error al traer los cv:", error);
    }
  };
}
//     const endpoint = "http://localhost:3001/cv"

//     let sort = "";
//     let categories = "";
//     let languages = "";
//     let subscriptions = "";
//     let search = "";

//     if (filters.sort) {
//         sort = "Más recientes"
//     } 

//     if (filters.categories) {
//         categories = filters.categories
//     }

//     if (filters.languages) {
//         languages = filters.languages
//     }

//     if (filters.subscriptions) {
//         subscriptions = filters.subscriptions
//     }

//     if (filters.search) {
//         search = filters.search
//     }
   
//     return async (dispatch) => {
//         try {
//             console.log("haciendo el dispatch de getAllCvs");
//             const response = await axios.get(endpoint, {
//                 params: {
//                     search: search,
//                     sort: sort,
//                     categories: categories,
//                     languages: languages,
//                     subscriptions: subscriptions,
//                     limit: limit,
//                     page: offset,
//                 }
//             });
//             let data = response.data;

//             return dispatch(setAllCvs(data));
//         } catch (error) {
//             console.log(error);
//         }
//     };

 export default getAllCvs;