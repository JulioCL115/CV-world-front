import { setFilters } from "../../slices/filtersSlice";

const setGlobalFilters = (filters) => {
    return async (dispatch) => {
        return dispatch(setFilters(filters));
    };
};

export default setGlobalFilters;