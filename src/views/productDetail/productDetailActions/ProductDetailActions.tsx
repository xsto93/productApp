import { Col, Row, Form, Select, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { CloseOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './productDetailActions.css';

const { Option } = Select;

export type SelectOptions = {
  code: string;
  name: string;
};

type validator =
  | ''
  | 'error'
  | 'success'
  | 'warning'
  | 'validating'
  | undefined;

interface onSubmitRequest {
  colorCode: string;
  storageCode: string;
}

interface ProductDetailProps {
  colors: SelectOptions[];
  storages: Array<SelectOptions>;
  /*eslint no-unused-vars: ["error", { "args": "none" }]*/
  onSubmit: (obj: onSubmitRequest) => void;
  onCancel: (evt: React.MouseEvent) => void;
}

const ProductDetailActions: React.FC<ProductDetailProps> = ({
  colors,
  storages,
  onSubmit,
  onCancel,
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedColorValidateStatus, setSelectedColorValidateStatus] =
    useState<validator>(undefined);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  const [selectedStorageValidateStatus, setSelectedStorageValidateStatus] =
    useState<validator>(undefined);

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

  const handleOnSubmit = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (!selectedColor) setSelectedColorValidateStatus('error');
    if (!selectedStorage) setSelectedStorageValidateStatus('error');

    if (selectedColor && selectedStorage) {
      onSubmit({
        colorCode: selectedColor,
        storageCode: selectedStorage,
      });
    }
  };

  const handleValidation = (validateStatus: validator) =>
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
                setSelectedColorValidateStatus(undefined);
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
                setSelectedStorageValidateStatus(undefined);
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

export default ProductDetailActions;
