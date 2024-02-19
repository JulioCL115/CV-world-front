import { setCurrenPage } from "../../slices/paginationSlice";

const setCurrentPage = (page) => {
    return async (dispatch) => {
        return dispatch(setCurrenPage(page));
    };
};

export default setCurrentPage;