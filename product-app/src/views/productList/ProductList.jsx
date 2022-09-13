import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const { products } = useSelector((state) => state);
  console.log('products: ', products);

  return <div>ProductList</div>;
};

export default ProductList;
