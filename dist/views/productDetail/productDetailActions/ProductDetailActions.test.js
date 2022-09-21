import { render, screen, fireEvent } from '@testing-library/react';
import ProductDetailAction from "./ProductDetailActions";
const mockProps = {
    colors: [],
    storages: [],
    onSubmit: jest.fn(),
    onCancel: jest.fn(),
};
describe('product Actions test suite', () => {
    test('ProductActions renders correctly', () => {
        render(<ProductDetailAction {...mockProps}/>);
        const selectColor = screen.getByText('Colores');
        const selectStorage = screen.getByText('Almacenamiento');
        expect(selectColor).toBeInTheDocument();
        expect(selectStorage).toBeInTheDocument();
    });
    test('click return button', () => {
        render(<ProductDetailAction {...mockProps}/>);
        const backButton = screen.getByText('Atrás').closest('button');
        fireEvent.click(backButton);
        expect(mockProps.onCancel).toHaveBeenCalled();
    });
    test('click accept button when color and storage are defined', () => {
        const props = Object.assign(Object.assign({}, mockProps), { storages: [{ code: '1', name: 'storage' }], colors: [{ code: '1', name: 'color' }] });
        render(<ProductDetailAction {...props}/>);
        const saveButton = screen.getByText('Añadir').closest('button');
        fireEvent.click(saveButton);
        expect(mockProps.onSubmit).toHaveBeenCalled();
    });
    test('click accept button and color is defined but sotrage not', () => {
        const props = Object.assign(Object.assign({}, mockProps), { storages: [{ code: '1', name: 'storage' }, { code: '2', name: 'storage2' }], colors: [{ code: '1', name: 'color' }] });
        render(<ProductDetailAction {...props}/>);
        const saveButton = screen.getByText('Añadir').closest('button');
        fireEvent.click(saveButton);
        const validationText = screen.getByText('El campo es obligatorio');
        expect(validationText).toBeInTheDocument();
    });
});
