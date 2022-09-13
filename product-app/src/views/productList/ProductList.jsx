import React, { useState } from 'react';
//import { useSelector } from 'react-redux';
import { Row, Input, Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../shared/hooks/useProducts';
import ProductCard from './productCard/ProductCard';
import './productList.css';

const ProductList = () => {
  //const { products } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState('');
  const { filteredProducts: products } = useProducts(filterText);

  const navigateToProductDetail = (id) => {
    navigate(`/products/${id}`, { replace: true });
  };

  const handleFilterTextChange = (value) => {
    console.log('Buscador:', value);
    setFilterText(value);
  };

  return (
    <>
      <Row justify="end">
        <Form.Item className="product-list-searcher">
          <Input.Search
            type="text"
            placeholder="Buscador"
            onSearch={handleFilterTextChange}
            allowClear
          />
        </Form.Item>
      </Row>
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
    </>
  );
};

export default ProductList;
