import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
const { func, string } = PropTypes;
import './productSearch.css';

const ProductSearch = ({ onChange, value }) => {
  const handleOnChange = (value) => {
    onChange(value);
  };

  return (
    <Form.Item className="product-list-searcher">
      <Input.Search
        defaultValue={value}
        type="text"
        placeholder="Buscador"
        onSearch={handleOnChange}
        allowClear
      />
    </Form.Item>
  );
};

ProductSearch.propTypes = {
  onChange: func.isRequired,
  value: string,
};

export default ProductSearch;
