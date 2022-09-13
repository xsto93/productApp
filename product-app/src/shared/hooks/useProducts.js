import { useEffect, useState } from 'react';
import getProducts from '../../core/services/productsService';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return { products };
}
