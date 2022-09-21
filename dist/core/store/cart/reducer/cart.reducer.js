const initialValue = 0;
export function cartReducer(state = initialValue, action) {
    switch (action.type) {
        case 'SET_CART_NUMBER':
            return action.payload;
        default:
            return state;
    }
}
