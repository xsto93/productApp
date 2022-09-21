import { useEffect, useState } from 'react';
import Product from '../../core/models/Product';
import getProductById from '../../core/services/productService';
import { setCartNumberThunk } from '../../core/store/cart/actions/cart.actions';
import { SelectOptions } from '../../views/productDetail/productDetailActions/ProductDetailActions';
import { useAppDispatch } from './hooks';

interface ProductToCart {
  colorCode: string;
  storageCode: string;
}

export default function useSingleProduct(productId: string) {
  const [productData, setProductData] = useState<Product>({} as Product);
  const [colors, setColors] = useState<SelectOptions[]>([]);
  const [storage, setStorage] = useState<SelectOptions[]>([]);
  //const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getProductById(productId).then((product) => {
      const { options, ...otherProductData } = product;
      setProductData(otherProductData);
      setColors(options?.colors);
      setStorage(options?.storages);
    });
  }, []);

  const saveProduct = (producInfo: ProductToCart) => {
    dispatch(setCartNumberThunk({ id: productId, ...producInfo }));
  };

  return {
    productData,
    colors,
    storage,
    saveProduct,
  };
}
