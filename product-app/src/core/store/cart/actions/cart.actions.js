import addProductToCart from '../../../services/shoppingCartService';

const SET_CART_NUMBER = 'SET_CART_NUMBER';

export const setCardNumber = (cartNumber) => ({
  type: SET_CART_NUMBER,
  payload: cartNumber,
});

export const setCartNumberThunk =
  (productInfo) => async (dispatch, getState) => {
    const cartNumber = await addProductToCart(productInfo);
    const { cartNumber: actualCardNumber } = getState();
    dispatch(setCardNumber(cartNumber + (actualCardNumber || 0)));
  };
