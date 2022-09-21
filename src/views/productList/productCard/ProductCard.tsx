import React from 'react';
import { Card, Statistic, Button } from 'antd';
import { EuroOutlined } from '@ant-design/icons';
import ProductImage from '../productImage/ProductImage';
import PropTypes from 'prop-types';
const { func, string } = PropTypes;
import './productCard.css';

interface ProductCardProps {
  image?: string;
  id: string;
  subTitle: string;
  title: string;
  price: string | number;
  /*eslint no-unused-vars: ["error", { "args": "none" }]*/
  onClick: (id: string) => void;
}

const ProductCard = ({
  image,
  id,
  subTitle,
  title,
  price,
  onClick,
}: ProductCardProps) => {
  const handleOnClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    onClick(id);
  };

  return (
    <Card
      size="small"
      cover={
        <ProductImage
          imageUrl={image}
          alt={title}
          className="product-image-container"
        />
      }
      actions={[
        <Button type="link" onClick={handleOnClick} block key={id}>
          Ver detalle
        </Button>,
      ]}
      hoverable
    >
      <Card.Meta title={title} description={subTitle} />
      <Statistic
        title="Precio"
        value={!price ? 'N/A' : price}
        precision={2}
        suffix={!price ? null : <EuroOutlined style={{ fontSize: '0.75em' }} />}
      />
    </Card>
  );
};

ProductCard.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  subTitle: string.isRequired,
  price: string.isRequired,
  image: string,
  onClick: func.isRequired,
};

export default ProductCard;
