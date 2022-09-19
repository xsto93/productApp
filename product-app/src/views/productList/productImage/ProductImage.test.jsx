import { render, screen } from '@testing-library/react';
import ProductImage from './ProductImage';

describe('ProductImage test suite', () => {

  test('ProductImage renders correctly', () => {
    const props = {
      imageUrl: "localhost",
      alt: "imagen",
    };
    render(<ProductImage {...props}/>);
    const image = screen.getAllByAltText('imagen').reduce(image => image);
    expect(image).toBeInTheDocument();
  });
});
