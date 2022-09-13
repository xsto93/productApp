import React from 'react';
import { Card, Statistic, Button } from 'antd';
import { EuroOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
const { func, string } = PropTypes;

const ProductCard = ({ image, id, subTitle, title, price, onClick }) => {
  const handleOnClick = (evt) => {
    evt.preventDefault();
    onClick(id);
  };

  return (
    <Card
      cover={
        <img
          alt="title"
          src={image}
          style={{ objectFit: 'contain', width: '150px', height: '150px' }}
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
        value={price}
        precision={2}
        suffix={<EuroOutlined />}
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
