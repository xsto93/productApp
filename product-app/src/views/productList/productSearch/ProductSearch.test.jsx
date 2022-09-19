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

  test('ProductSearch onChange is called', async () => {
    const props = {
      value: "value",
      onChange: jest.fn(),
    };
    render(<ProductSearch {...props}/>);

    const searcher = await screen.findByDisplayValue('value');
    fireEvent.keyDown(searcher, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    });
    expect(props.onChange).toHaveBeenCalledWith("value");
  });
});
