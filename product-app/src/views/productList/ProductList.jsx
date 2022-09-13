import React from 'react';
//import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../shared/hooks/useProducts';
import ProductCard from './productCard/ProductCard';
import './productList.css';

const ProductList = () => {
  //const { products } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const { products } = useProducts();
  console.log('Prod', products);

  const navigateToProductDetail = (id) => {
    navigate(`/products/${id}`, { replace: true });
  };

  return (
    <div className="product-list-container">
      {products &&
        products.map((product) => (
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
