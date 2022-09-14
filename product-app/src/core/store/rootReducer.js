import { combineReducers } from 'redux';
import { cartReducer } from './cart/reducer/cart.reducer';
import { productsReducer } from './products/reducer/products.reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cartNumber: cartReducer,
});

export default rootReducer;
