import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductCard from './productCard/ProductCard';
import './productList.css';

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const navigate = useNavigate();

  const navigateToProductDetail = (id) => {
    navigate(`/products/${id}`, { replace: true });
  };

  return (
    <div className="product-list-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.brand}
          subTitle={product.model}
          price={product.price}
          image={product.imgUrl}
          onClick={navigateToProductDetail}
        />
      ))}
    </div>
  );
};

export default ProductList;
