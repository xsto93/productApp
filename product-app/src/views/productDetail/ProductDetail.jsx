import { Row, Col, message } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetailDescription from './productDetailDescription/ProductDetailDescription';
import ProductDetailActions from './productDetailActions/ProductDetailActions';
import useSingleProduct from '../../shared/hooks/useSingleProduct';
import ProductImage from '../productList/productImage/ProductImage';
import './productDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { productData, colors, storage, saveProduct } = useSingleProduct(id);
  const navigate = useNavigate();

  const handleOnCancel = (evt) => {
    evt.preventDefault();
    navigate('/');
  };

  const handleOnSubmit = (productValues) => {
    saveProduct(productValues);
    message.success('Añadido el producto correctamente');
  };

  return (
    <>
      <Row>
        <Col
          span={12}
          className="product-container"
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
        >
          <ProductImage
            imageUrl={productData.imgUrl ?? null}
            alt={productData?.title}
            className="product-detail-image"
          />
        </Col>
        <Col
          span={12}
          className="product-container"
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
        >
          <Row>
            <ProductDetailDescription productData={productData} />
          </Row>
          <Row>
            <ProductDetailActions
              colors={colors}
              storages={storage}
              onCancel={handleOnCancel}
              onSubmit={handleOnSubmit}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetail;
