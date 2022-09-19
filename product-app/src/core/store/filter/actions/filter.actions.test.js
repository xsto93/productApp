import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {setFilterValue} from './filter.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Filter actions test suite', () => {

  test('SET_FILTER is called', () => {
    const expectedActions = [
      {
        type: "SET_FILTER",
        payload: "filter",
      }
    ];

    const store = mockStore({})
    store.dispatch(setFilterValue("filter"));
    expect(store.getActions()).toEqual(expectedActions);
  })
});
