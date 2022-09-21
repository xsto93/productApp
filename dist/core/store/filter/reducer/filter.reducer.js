const initialValue = '';
export function filterReducer(state = initialValue, action) {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload;
        default:
            return state;
    }
}
