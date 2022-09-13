const productsInitialState = {
  products: [],
  filteredProducts: [],
  lastConsultedDate: null,
};

export function productsReducer(state = productsInitialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
