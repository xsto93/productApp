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

export const getProductsThunk = () => async (dispatch, getState) => {
  const { products: originalProducts, lastConsultedDate } = getState().products;

  if (
    originalProducts.length === 0 ||
    Date.now() - lastConsultedDate >= TIMEOUT
  ) {
    dispatch(setLoading(true));
    try {
      const products = await getProducts();
      dispatch(getAllProducts(products));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(getAllProducts([]));
      dispatch(setLoading(false));
    }
  }
};
