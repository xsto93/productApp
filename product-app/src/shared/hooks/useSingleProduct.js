import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import getProductById from '../../core/services/productService';
import { setCartNumberThunk } from '../../core/store/cart/actions/cart.actions';

export default function useSingleProduct(productId) {
  const [productData, setProductData] = useState({});
  const [colors, setColors] = useState([]);
  const [storage, setStorage] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductById(productId).then((product) => {
      const { options, ...otherProductData } = product;
      setProductData(otherProductData);
      setColors(options?.colors);
      setStorage(options?.storages);
    });
  }, []);

  const saveProduct = (producInfo) => {
    dispatch(setCartNumberThunk({ id: productId, ...producInfo }));
  };

  return {
    productData,
    colors,
    storage,
    saveProduct,
  };
}
