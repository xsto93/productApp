const productsInitialState = {
    products: [],
    filteredProducts: [],
    lastConsultedDate: null,
    loading: false,
};
export function productsReducer(state = productsInitialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return Object.assign(Object.assign({}, state), { products: action.payload.products, filteredProducts: action.payload.products, lastConsultedDate: action.payload.date });
        case 'SET_FILTERED_PRODUCTS':
            return Object.assign(Object.assign({}, state), { filteredProducts: action.payload });
        case 'SET_LOADING':
            return Object.assign(Object.assign({}, state), { loading: action.payload });
        default:
            return state;
    }
}
