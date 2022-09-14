import React, { useState } from 'react';
import { Row, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../shared/hooks/useProducts';
import ProductCard from './productCard/ProductCard';
import './productList.css';
import ProductSearch from './productSearch/ProductSearch';

const ProductList = () => {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState('');
  const { filteredProducts: products, loading } = useProducts(filterText);

  const navigateToProductDetail = (id) => {
    navigate(`/products/${id}`, { replace: true });
  };

  const handleFilterTextChange = (value) => {
    setFilterText(value);
  };

  return (
    <>
      <Row justify="end">
        <ProductSearch onChange={handleFilterTextChange} />
      </Row>
      <Spin spinning={loading}>
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
      </Spin>
    </>
  );
};

export default ProductList;
