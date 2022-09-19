import { render, screen } from '@testing-library/react';
import App from './App';



describe('App Test', () => {

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
