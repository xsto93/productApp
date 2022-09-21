var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { render, screen, fireEvent } from '@testing-library/react';
import ProductSearch from './ProductSearch';
describe('ProductSearch test suite', () => {
    test('ProductSearch renders correctly', () => {
        const props = {
            value: "",
            onChange: jest.fn(),
        };
        render(<ProductSearch {...props}/>);
        screen.findByPlaceholderText('Buscador').then(element => {
            expect(element.pendingProps.placeholder).toEqual('Buscador');
        });
    });
    test('ProductSearch onChange is called', () => __awaiter(void 0, void 0, void 0, function* () {
        const props = {
            value: "value",
            onChange: jest.fn(),
        };
        render(<ProductSearch {...props}/>);
        const searcher = yield screen.findByDisplayValue('value');
        fireEvent.keyDown(searcher, {
            key: "Enter",
            code: "Enter",
            keyCode: 13,
            charCode: 13
        });
        expect(props.onChange).toHaveBeenCalledWith("value");
    }));
});
