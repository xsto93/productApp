import React from 'react';
import { Row, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../shared/hooks/useProducts';
import useFilter from '../../shared/hooks/useFilter';
import ProductCard from './productCard/ProductCard';
import ProductSearch from './productSearch/ProductSearch';
import './productList.css';

const ProductList = () => {
  const navigate = useNavigate();
  //const [filterText, setFilterText] = useState('');
  const { filter, setFilterTextValue } = useFilter();
  const { filteredProducts: products, loading } = useProducts(filter);

  const navigateToProductDetail = (id) => {
    navigate(`/products/${id}`, { replace: true });
  };

  const handleFilterTextChange = (value) => {
    setFilterTextValue(value);
  };

  return (
    <>
      <Row justify="end">
        <ProductSearch onChange={handleFilterTextChange} value={filter} />
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
