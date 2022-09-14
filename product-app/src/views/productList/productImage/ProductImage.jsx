import React from 'react';
import PropTypes from 'prop-types';
const { string } = PropTypes;

const ProductImage = ({ imageUrl, alt, className }) => {
  return (
    <div className={className ?? className}>
      <img alt={alt} src={imageUrl} />
    </div>
  );
};

ProductImage.propTypes = {
  imageUrl: string,
  alt: string,
  className: string,
};

export default ProductImage;
