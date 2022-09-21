var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getProducts from '../../../services/productsService';
import { TIMEOUT } from '../../../services/settings';
const GET_PRODUCTS = 'GET_PRODUCTS';
const SET_FILTERED_PRODUCTS = 'SET_FILTERED_PRODUCTS';
const SET_LOADING = 'SET_LOADING';
const getAllProducts = (products) => ({
    type: GET_PRODUCTS,
    payload: {
        products: products,
        date: Date.now(),
    },
});
export const setFilteredProducts = (filteredProducts) => ({
    type: SET_FILTERED_PRODUCTS,
    payload: filteredProducts,
});
export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading,
});
export const getProductsThunk = () => (dispatch, getState) => __awaiter(void 0, void 0, void 0, function* () {
    const { products: originalProducts, lastConsultedDate } = getState().products;
    if (originalProducts.length === 0 ||
        Date.now() - lastConsultedDate >= TIMEOUT) {
        dispatch(setLoading(true));
        try {
            const products = yield getProducts();
            dispatch(getAllProducts(products));
            dispatch(setLoading(false));
        }
        catch (error) {
            dispatch(getAllProducts([]));
            dispatch(setLoading(false));
        }
    }
});
