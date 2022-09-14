import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
const { func } = PropTypes;
import './productSearch.css';

const ProductSearch = ({ onChange }) => {
  const handleOnChange = (value) => {
    onChange(value);
  };

  return (
    <Form.Item className="product-list-searcher">
      <Input.Search
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
};

export default ProductSearch;
