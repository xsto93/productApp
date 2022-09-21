import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import CartNumberRequest from '../../../models/CartNumberRequest';
import addProductToCart from '../../../services/shoppingCartService';
import { RootState } from '../../store';

const SET_CART_NUMBER = 'SET_CART_NUMBER';

export const setCardNumber = (cartNumber: number) => ({
  type: SET_CART_NUMBER,
  payload: cartNumber,
});

export const setCartNumberThunk =
  (
    productInfo: CartNumberRequest,
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    try {
      const cartNumber = await addProductToCart(productInfo);
      const { cartNumber: actualCardNumber } = getState();
      dispatch(setCardNumber(cartNumber + (actualCardNumber || 0)));
    } catch (error) {
      dispatch(setCardNumber(0));
    }
  };
