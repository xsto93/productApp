var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import addProductToCart from '../../../services/shoppingCartService';
const SET_CART_NUMBER = 'SET_CART_NUMBER';
export const setCardNumber = (cartNumber) => ({
    type: SET_CART_NUMBER,
    payload: cartNumber,
});
export const setCartNumberThunk = (productInfo) => (dispatch, getState) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartNumber = yield addProductToCart(productInfo);
        const { cartNumber: actualCardNumber } = getState();
        dispatch(setCardNumber(cartNumber + (actualCardNumber || 0)));
    }
    catch (error) {
        dispatch(setCardNumber(0));
    }
});
