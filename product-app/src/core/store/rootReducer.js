import { combineReducers } from 'redux';
import { cartReducer } from './cart/reducer/cart.reducer';
import { filterReducer } from './filter/reducer/filter.reducer';
import { productsReducer } from './products/reducer/products.reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cartNumber: cartReducer,
  filter: filterReducer,
});

export default rootReducer;
