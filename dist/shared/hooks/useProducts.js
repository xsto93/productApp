import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsThunk, setFilteredProducts, } from '../../core/store/products/actions/products.action';
export default function useProducts(searchCriteria) {
    const { products, filteredProducts, loading } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsThunk());
    }, []);
    useEffect(() => {
        const newProducts = searchCriteria
            ? products.filter((product) => product.brand
                .toLowerCase()
                .includes(searchCriteria.toLowerCase()) ||
                product.model.toLowerCase().includes(searchCriteria.toLowerCase()))
            : [...products];
        dispatch(setFilteredProducts(newProducts));
    }, [searchCriteria]);
    return { products, filteredProducts, loading };
}
