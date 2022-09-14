import getProducts from '../../../services/productsService';

const GET_PRODUCTS = 'GET_PRODUCTS';
const SET_FILTERED_PRODUCTS = 'SET_FILTERED_PRODUCTS';
const SET_LOADING = 'SET_LOADING';

const getAllProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const setFilteredProducts = (filteredProducts) => ({
  type: SET_FILTERED_PRODUCTS,
  payload: filteredProducts,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const getProductsThunk = () => async (dispatch) => {
  dispatch(setLoading(true));
  const products = await getProducts();
  dispatch(getAllProducts(products));
  dispatch(setLoading(false));
};
