import { render, screen, fireEvent } from '@testing-library/react';
import useFilter from '../../shared/hooks/useFilter';
import useProducts from '../../shared/hooks/useProducts';
import ProductList from './ProductList';

const mockedUsedNavigate = jest.fn();
const mockedSearcherText = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

jest.mock('../../shared/hooks/useProducts');
jest.mock('../../shared/hooks/useFilter');

const mockStore = {
  products: {
    products: [],
    filteredProducts: [],
    lastConsultedDate: null,
    loading: false,
  },
  filter: "",
  cartNumber: 0
};
const mockDispatch = jest.fn();
const mockSelector = jest.fn().mockImplementation(() => (mockStore));
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelector,
}));


describe('ProductList test suite', () => {
  test('ProductList renders correctly', () => {

    useFilter.mockImplementation(() => ({
      filter: '',
      setFilterTextValue: jest.fn()
    }));

    useProducts.mockImplementation(() => ({
      products: [{id: '1', brand: 'Acer', model: 'Liquid', price: '10', imgUrl: ''}],
      filteredProducts: [{id: '1', brand: 'Acer', model: 'Liquid', price: '10', imgUrl: ''}],
      loading: false
    }));

    render(<ProductList />);
    const card = screen.getByText('Acer');
    expect(card).toBeInTheDocument();
  });

  test('ProductList renders without data in filteredProducts and filter', () => {

    useFilter.mockImplementation(() => ({
      filter: 'abc',
      setFilterTextValue: jest.fn()
    }));

    useProducts.mockImplementation(() => ({
      products: [{id: '1', brand: 'Acer', model: 'Liquid', price: '10', imgUrl: ''}],
      filteredProducts: [],
      loading: false
    }));
    render(<ProductList />);
    const empty = screen.getByText('No Data');
    expect(empty).toBeInTheDocument();
  });

  test('ProductList renders with Card and press Button', () => {

    useFilter.mockImplementation(() => ({
      filter: '',
      setFilterTextValue: jest.fn()
    }));
    useProducts.mockImplementation(() => ({
      products: [{id: '1', brand: 'Acer', model: 'Liquid', price: '10', imgUrl: ''}],
      filteredProducts: [{id: '1', brand: 'Acer', model: 'Liquid', price: '10', imgUrl: ''}],
      loading: false
    }));
    render(<ProductList />);
    const button = screen.getByText('Ver detalle').closest('button');
    fireEvent.click(button);
    expect(mockedUsedNavigate).toHaveBeenCalled();
  });

  test('ProductList renders and searcher has initial value', () => {

    useFilter.mockImplementation(() => ({
      filter: 'abc',
      setFilterTextValue: mockedSearcherText
    }));
    useProducts.mockImplementation(() => ({
      products: [{id: '1', brand: 'Acer', model: 'Liquid', price: '10', imgUrl: ''}],
      filteredProducts: [{id: '1', brand: 'Acer', model: 'Liquid', price: '10', imgUrl: ''}],
      loading: false
    }));
    render(<ProductList />);
    const searcher = screen.getByDisplayValue('abc').closest('input');
    fireEvent.keyDown(searcher, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    });
    expect(mockedSearcherText).toHaveBeenCalledWith('abc');
  });
})
