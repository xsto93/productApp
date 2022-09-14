const productsInitialState = {
  products: [],
  filteredProducts: [],
  lastConsultedDate: null,
  loading: false,
};

export function productsReducer(state = productsInitialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        lastConsultedDate: new Date(),
      };
    case 'SET_FILTERED_PRODUCTS':
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
