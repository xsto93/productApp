import { render, screen, fireEvent } from '@testing-library/react';
import ProductDetail from './ProductDetail';
import useSingleProduct from '../../shared/hooks/useSingleProduct';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
jest.mock('../../shared/hooks/useSingleProduct');

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

const mockUseSingleProduct = {
  productData: { id: '1', brand: 'Acer' },
  colors: [{ code: '1', name: 'color' }],
  storage: [{ code: '1', name: 'storage' }],
  saveProduct: jest.fn()
};


describe('Product Detail test suite', () => {
  test('Product Detail renders correctly', () => {

    useSingleProduct.mockImplementation(() => ({
      productData: {},
      colors: [],
      storage: [],
      saveProduct: jest.fn()
    }));

    render(<ProductDetail />);
    const title = screen.getByText('Detalle del producto');
    expect(title).toBeInTheDocument();
  });

  test('Product Detail click in add button with color and storage', () => {

    useSingleProduct.mockImplementation(() => ({ ...mockUseSingleProduct }));
    render(<ProductDetail />);
    const saveButton = screen.getByText('Añadir').closest('button');
    fireEvent.click(saveButton);
    expect(mockUseSingleProduct.saveProduct).toHaveBeenCalledWith({
      colorCode: '1',
      storageCode: '1',
    });
  });

  test('Product Detail click in return button', () => {

    useSingleProduct.mockImplementation(() => ({ ...mockUseSingleProduct }));
    render(<ProductDetail />);
    const returnButton = screen.getByText('Atrás').closest('button');
    fireEvent.click(returnButton);
    expect(mockedUsedNavigate).toHaveBeenCalled();
  });

  test('Product Detail have an image', () => {
    useSingleProduct.mockImplementation(() => ({ ...mockUseSingleProduct, productData: { title: 'Acer', imageUrl: 'localhost' } }));
    render(<ProductDetail />);
    let image = screen.getAllByAltText('Acer').reduce(image => image);
    expect(image).toBeInTheDocument();
  });

});
