import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
const { func, string } = PropTypes;
import './productSearch.css';

interface SearchProps {
  value?: string;
  /*eslint no-unused-vars: ["error", { "args": "none" }]*/
  onChange: (v: string) => void;
}

const ProductSearch: React.FC<SearchProps> = ({
  onChange,
  value,
}: SearchProps) => {
  const handleOnChange = (value: string) => {
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
