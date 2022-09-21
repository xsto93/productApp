import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
const mockDispatch = jest.fn();
const mockSelector = jest.fn().mockImplementation(() => ({
    cartNumber: 0
}));
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
    useSelector: () => mockSelector,
}));
describe('Header test suite', () => {
    test('Header renders correctly', () => {
        render(<BrowserRouter><Header title="ProductApp"></Header></BrowserRouter>);
        const titleLink = screen.getByText('ProductApp');
        expect(titleLink).toBeInTheDocument();
    });
});
