import { setNumberOfPages } from "../../slices/paginationSlice";

const setNumberOfPages = (number) => {
    return async (dispatch) => {
        return dispatch(setNumberOfPages(number));
    };
};

export default setNumberOfPages;