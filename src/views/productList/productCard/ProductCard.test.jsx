import { render, screen, fireEvent } from '@testing-library/react';
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

    expect(screen.getByText('title')).toBeInTheDocument();
  });


  test('ProductCard renders without price', () => {

    const props = {
      image: null,
      id: "1",
      title: 'title',
      subTitle: 'subtitle',
      price: '',
      onClick: jest.fn()
    };
    render(<ProductCard {...props}/>);
    const price = screen.getByText("N/A");
    expect(price.textContent).toBe("N/A");
  });

  test('ProductCard click in detail button', () => {

    const props = {
      image: null,
      id: "1",
      title: 'title',
      subTitle: 'subtitle',
      price: '',
      onClick: jest.fn()
    };
    render(<ProductCard {...props}/>);
    const button = screen.getByText("Ver detalle");
    fireEvent.click(button);
    expect(props.onClick).toHaveBeenCalledWith(props.id);
  });

});
