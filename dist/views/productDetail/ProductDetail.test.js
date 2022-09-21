import { render, screen, fireEvent } from '@testing-library/react';
import ProductDetail from './ProductDetail';
import useSingleProduct from '../../shared/hooks/useSingleProduct';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => (Object.assign(Object.assign({}, jest.requireActual('react-router-dom')), { useNavigate: () => mockedUsedNavigate })));
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
        useSingleProduct.mockImplementation(() => (Object.assign({}, mockUseSingleProduct)));
        render(<ProductDetail />);
        const saveButton = screen.getByText('Añadir').closest('button');
        fireEvent.click(saveButton);
        expect(mockUseSingleProduct.saveProduct).toHaveBeenCalledWith({
            colorCode: '1',
            storageCode: '1',
        });
    });
    test('Product Detail click in return button', () => {
        useSingleProduct.mockImplementation(() => (Object.assign({}, mockUseSingleProduct)));
        render(<ProductDetail />);
        const returnButton = screen.getByText('Atrás').closest('button');
        fireEvent.click(returnButton);
        expect(mockedUsedNavigate).toHaveBeenCalled();
    });
    test('Product Detail have an image', () => {
        useSingleProduct.mockImplementation(() => (Object.assign(Object.assign({}, mockUseSingleProduct), { productData: { title: 'Acer', imageUrl: 'localhost', price: '100' } })));
        render(<ProductDetail />);
        const image = screen.getAllByAltText('Acer').reduce(image => image);
        expect(image).toBeInTheDocument();
    });
});
