import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {setCardNumber, setCartNumberThunk} from './cart.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Cart actions test suite', () => {

  test('SET_CART_NUMBER is called', () => {
    const expectedActions = [
      {
        type: "SET_CART_NUMBER",
        payload: 1,
      }
    ];

    const store = mockStore({})
    store.dispatch(setCardNumber(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
