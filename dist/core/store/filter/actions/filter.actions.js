const SET_FILTER = 'SET_FILTER';
export const setFilterValue = (filterValue) => ({
    type: SET_FILTER,
    payload: filterValue,
});
