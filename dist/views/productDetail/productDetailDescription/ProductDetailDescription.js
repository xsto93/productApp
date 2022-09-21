import React from 'react';
import { Descriptions, Statistic } from 'antd';
import { EuroOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
const { object } = PropTypes;
const labelStyle = {
    fontWeight: 500,
};
const ProductDetailDescription = ({ productData = {} }) => {
    return (<Descriptions title="Detalle del producto" column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }} bordered>
      <Descriptions.Item label="Marca" labelStyle={labelStyle}>
        {productData === null || productData === void 0 ? void 0 : productData.brand}
      </Descriptions.Item>
      <Descriptions.Item label="Modelo" labelStyle={labelStyle}>
        {productData === null || productData === void 0 ? void 0 : productData.model}
      </Descriptions.Item>
      {/* <Descriptions.Item label="Precio" labelStyle={labelStyle}>
          {productData?.price}
        </Descriptions.Item> */}
      <Descriptions.Item label="CPU" labelStyle={labelStyle}>
        {productData === null || productData === void 0 ? void 0 : productData.cpu}
      </Descriptions.Item>
      <Descriptions.Item label="RAM" labelStyle={labelStyle}>
        {productData === null || productData === void 0 ? void 0 : productData.ram}
      </Descriptions.Item>
      <Descriptions.Item label="Sistema Operativo" labelStyle={labelStyle}>
        {productData === null || productData === void 0 ? void 0 : productData.so}
      </Descriptions.Item>
      <Descriptions.Item label="Resolución de Pantalla" labelStyle={labelStyle}>
        {productData === null || productData === void 0 ? void 0 : productData.displayResolution}
      </Descriptions.Item>
      <Descriptions.Item label="Bateria" labelStyle={labelStyle}>
        {productData === null || productData === void 0 ? void 0 : productData.battery}
      </Descriptions.Item>
      <Descriptions.Item label="Dimensiones" labelStyle={labelStyle}>
        {productData === null || productData === void 0 ? void 0 : productData.dimentions}
      </Descriptions.Item>
      <Descriptions.Item label="Peso" labelStyle={labelStyle}>
        {productData === null || productData === void 0 ? void 0 : productData.weight}
      </Descriptions.Item>
      <Descriptions.Item label="Cámara Trasera" labelStyle={labelStyle}>
        {Array.isArray(productData === null || productData === void 0 ? void 0 : productData.primaryCamera)
            ? productData === null || productData === void 0 ? void 0 : productData.primaryCamera.join(', ')
            : productData === null || productData === void 0 ? void 0 : productData.primaryCamera}
      </Descriptions.Item>
      <Descriptions.Item label="Cámara Delantera" labelStyle={labelStyle}>
        {productData === null || productData === void 0 ? void 0 : productData.secondaryCmera}
      </Descriptions.Item>
      <Descriptions.Item label="Precio" labelStyle={labelStyle}>
        <Statistic title="" precision={2} value={`${!(productData === null || productData === void 0 ? void 0 : productData.price) ? 'N/A' : productData === null || productData === void 0 ? void 0 : productData.price}`} suffix={!(productData === null || productData === void 0 ? void 0 : productData.price) ? null : (<EuroOutlined style={{ fontSize: '0.5em' }}/>)}/>
      </Descriptions.Item>
    </Descriptions>);
};
ProductDetailDescription.propTypes = {
    productData: object.isRequired,
};
export default ProductDetailDescription;
