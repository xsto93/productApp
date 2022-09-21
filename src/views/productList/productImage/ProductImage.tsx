import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
const { string } = PropTypes;

interface ProductImageProps {
  imageUrl?: string;
  alt: string;
  className: string;
}

const ProductImage = ({ imageUrl, alt, className }: ProductImageProps) => {
  return (
    <div className={className ?? className}>
      {/* <img alt={alt} src={imageUrl} loading="lazy" placeholder={alt} /> */}
      <LazyLoadImage alt={alt} effect="blur" src={imageUrl} />
    </div>
  );
};

ProductImage.propTypes = {
  imageUrl: string,
  alt: string,
  className: string,
};

export default ProductImage;
