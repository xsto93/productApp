import { cartReducer } from './cart.reducer';
const initalState = 0;
describe('Cart reducer test suite', () => {
    test('action.type is undefined and return initialState', () => {
        expect(cartReducer(undefined, {})).toEqual(initalState);
    });
    test('action.type is SET_CART_NUMBER and return cart state', () => {
        expect(cartReducer(initalState, {
            type: 'SET_CART_NUMBER',
            payload: 1
        })).toEqual(1);
    });
});
