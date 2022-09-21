import { filterReducer } from './filter.reducer';
const initalState = "";
describe('Filter reducer test suite', () => {
    test('action.type is undefined and return initialState', () => {
        expect(filterReducer(undefined, {})).toEqual(initalState);
    });
    test('action.type is SET_FILTER and return filter state', () => {
        expect(filterReducer(initalState, {
            type: 'SET_FILTER',
            payload: "filter"
        })).toEqual("filter");
    });
});
