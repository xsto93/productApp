import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {setFilteredProducts, setLoading, getProductsThunk} from './products.action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{id: 1}]),
  })
);

describe('Product actions test suite',() => {

  beforeEach(() => {
    fetch.mockClear();
  })

  test('When setLoading action is called', () => {
    const expectedActions = [
      {
        type: "SET_LOADING",
        payload: true,
      }
    ];

    const store = mockStore({})
    store.dispatch(setLoading(true));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('When setFilteredProducts action is called', () => {
    const expectedActions = [
      {
        type: "SET_FILTERED_PRODUCTS",
        payload: [{id: 1}],
      }
    ];

    const store = mockStore({})
    store.dispatch(setFilteredProducts([{id: 1}]));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('When getProductsThunk action is called', () => {

    const expectedActions = [
      {
        type: "GET_PRODUCTS",
        payload: [{id: 1}],
      },
      {
        type: "SET_LOADING",
        payload: true,
      },
    ];

    const mockState = {
      products: [],
      filteredProducts: [],
      lastConsultedDate: null,
      loading: false,
    }
    const store = mockStore(mockState);
    store.getState = () => ({ products: [] });
    store.dispatch(getProductsThunk()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
