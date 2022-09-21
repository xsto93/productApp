import { render, screen } from '@testing-library/react';
import ProductDetailDescription from './ProductDetailDescription';

describe('ProductDescription test suite', () => {

  test('ProductDescription renders correctly', () => {

    const mockProps = {
      productData: {
        brand: 'Acer',
        model: 'Liquid',
        price: "100",
        cpu:  "cpu",
        ram: "1GB",
        so: "android",
        displayResolution: "200 x 200",
        battery: '4100mh',
        dimentions:"10x10",
        weight: "15g",
        primaryCamera: ['1', '2'],
        secondaryCmera: "a"
      }
    };
      render(<ProductDetailDescription {...mockProps}/>)
      const {productData} = mockProps;
      const brand = screen.getByText(productData.brand);
      const model = screen.getByText(productData.model);
      const price = screen.getByText(productData.price);
      const cpu = screen.getByText(productData.cpu);
      const ram = screen.getByText(productData.ram);
      const so = screen.getByText(productData.so);
      const resolution = screen.getByText(productData.displayResolution);
      const battery = screen.getByText(productData.battery);
      const dimensions = screen.getByText(productData.dimentions);
      const weight = screen.getByText(productData.weight);
      const camera = screen.getByText(productData.primaryCamera.join(', '))
      const secondCamera = screen.getByText(productData.secondaryCmera);


      expect(brand.textContent).toBe(`${productData.brand}`);
      expect(model.textContent).toBe(`${productData.model}`);
      expect(price.textContent).toBe(`${productData.price}`);
      expect(ram.textContent).toBe(`${productData.ram}`);
      expect(so.textContent).toBe(`${productData.so}`);
      expect(cpu.textContent).toBe(`${productData.cpu}`);
      expect(resolution.textContent).toBe(`${productData.displayResolution}`);
      expect(battery.textContent).toBe(`${productData.battery}`);
      expect(weight.textContent).toBe(`${productData.weight}`);
      expect(dimensions.textContent).toBe(`${productData.dimentions}`);
      expect(camera.textContent).toBe(`${productData.primaryCamera.join(', ')}`);
      expect(secondCamera.textContent).toBe(`${productData.secondaryCmera}`);

  });

});
