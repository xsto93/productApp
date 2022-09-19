import { Col, Row, Form, Select, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { CloseOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './productDetailActions.css';
import PropTypes from 'prop-types';
const { func, array } = PropTypes;

const { Option } = Select;

const validateStatus = {
  error: 'error',
  success: 'success',
};

const ProductDetailActions = ({ colors, storages, onSubmit, onCancel }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorValidateStatus, setSelectedColorValidateStatus] =
    useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedStorageValidateStatus, setSelectedStorageValidateStatus] =
    useState(null);

  useEffect(() => {
    let code = null;
    if (colors.length === 1) {
      code = colors.reduce((color) => color)?.code;
      setSelectedColor(code);
    }

    if (storages.length === 1) {
      code = storages.reduce((storage) => storage)?.code;
      setSelectedStorage(code);
    }
  }, [colors, storages]);

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    if (!selectedColor) setSelectedColorValidateStatus(validateStatus.error);
    if (!selectedStorage)
      setSelectedStorageValidateStatus(validateStatus.error);

    if (selectedColor && selectedStorage) {
      onSubmit({
        colorCode: selectedColor,
        storageCode: selectedStorage,
      });
    }
  };

  const handleValidation = (validateStatus) =>
    validateStatus === 'error' ? 'El campo es obligatorio' : null;

  return (
    <>
      <Row className="product-actions-container">
        <Col span={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <Form.Item
            required={true}
            validateStatus={selectedColorValidateStatus}
            help={handleValidation(selectedColorValidateStatus)}
          >
            <Select
              placeholder="Colores"
              value={selectedColor}
              onChange={(value) => {
                setSelectedColor(value);
                setSelectedColorValidateStatus(null);
              }}
            >
              {colors &&
                colors.map((color) => (
                  <Option key={color.code} value={color.code}>
                    {color.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <Form.Item
            required={true}
            validateStatus={selectedStorageValidateStatus}
            help={handleValidation(selectedStorageValidateStatus)}
          >
            <Select
              placeholder="Almacenamiento"
              value={selectedStorage}
              onChange={(value) => {
                setSelectedStorage(value);
                setSelectedStorageValidateStatus(null);
              }}
            >
              {storages &&
                storages.map((storage) => (
                  <Option key={storage.code} value={storage.code}>
                    {storage.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
        <Row className="product-actions-button-container">
          <Col className="product-actions-button">
            <Button icon={<CloseOutlined />} type="link" onClick={onCancel}>
              Atrás
            </Button>
            <Button
              type="primary"
              onClick={handleOnSubmit}
              icon={<ShoppingCartOutlined />}
            >
              Añadir
            </Button>
          </Col>
        </Row>
      </Row>
    </>
  );
};

ProductDetailActions.propTypes = {
  colors: array,
  storages: array,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
};

export default ProductDetailActions;
