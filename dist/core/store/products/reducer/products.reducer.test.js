import { productsReducer } from './products.reducer';
const initalState = {
    products: [],
    filteredProducts: [],
    lastConsultedDate: null,
    loading: false,
};
describe('Product reducer test suite', () => {
    test('action.type is undefined and return initialValue', () => {
        expect(productsReducer(undefined, {})).toEqual(initalState);
    });
    test('action.type is GET_PRODUCTS', () => {
        const date = new Date();
        const payload = { products: [{ id: 1 }], date: date };
        expect(productsReducer([], {
            type: 'GET_PRODUCTS',
            payload: Object.assign({}, payload)
        })).toEqual({
            products: [{ id: 1 }],
            filteredProducts: [{ id: 1 }],
            lastConsultedDate: date
        });
    });
    test('action.type is SET_FILTERED_PRODUCTS', () => {
        const payload = [{ id: 1 }];
        expect(productsReducer(initalState, {
            type: 'SET_FILTERED_PRODUCTS',
            payload: payload
        })).toEqual({
            products: [],
            filteredProducts: [{ id: 1 }],
            lastConsultedDate: null,
            loading: false,
        });
    });
    test('action.type is SET_LOADING', () => {
        const payload = true;
        expect(productsReducer(initalState, {
            type: 'SET_LOADING',
            payload: payload
        })).toEqual({
            products: [],
            filteredProducts: [],
            lastConsultedDate: null,
            loading: true,
        });
    });
});
