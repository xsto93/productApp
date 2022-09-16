import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';


describe('ProductCard test suite', () => {

  test('ProductCard renders correctly', () => {

    const props = {
      image: 'localhost',
      id: "1",
      title: 'title',
      subTitle: 'subtitle',
      price: "1",
      onClick: jest.fn()
    };
    render(<ProductCard {...props}/>);
  })

});
