import { render, screen } from '@testing-library/react';
import App from './App';



describe('App Test', () => {
  // beforeAll(() => {
  //   Object.defineProperty(window, 'matchMedia', {
  //     writable: true,
  //     value: jest.fn().mockImplementation(query => ({
  //       matches: false,
  //       media: query,
  //       onchange: null,
  //       addListener: jest.fn(), // Deprecated
  //       removeListener: jest.fn(), // Deprecated
  //       addEventListener: jest.fn(),
  //       removeEventListener: jest.fn(),
  //       dispatchEvent: jest.fn(),
  //     })),
  //   });
  // })

  test('header title is rendered', () => {
    render(<App />);
    const titleLinkElement = screen.getByText(/ProductApp/i);
    expect(titleLinkElement).toBeInTheDocument();
  });

  test('breadcrumb first element is rendered', () => {
    render(<App />);
    const breadcrumbText = screen.getByText(/Listado de productos/i);
    expect(breadcrumbText).toBeInTheDocument();
  });

})
