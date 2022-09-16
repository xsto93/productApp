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
        dimentions:"",
        weight: "",
        primaryCamera: ['1', '2'],
        secondaryCmera: ""
      }
    };
      render(<ProductDetailDescription {...mockProps}/>)

      const brand = screen.getByText('Marca').closest("div");
      const model = screen.getByText('Modelo').closest("div");
      const price = screen.getByText('Precio').closest("div");
      const cpu = screen.getByText('CPU').closest("div");
      const ram = screen.getByText('RAM').closest("div");
      const so = screen.getByText('Sistema Operativo').closest("div");
      const resolution = screen.getByText('Resolución de Pantalla').closest("div");
      const battery = screen.getByText('Bateria').closest("div");
      const dimensions = screen.getByText('Dimensiones').closest("div");
      const weight = screen.getByText('Peso').closest("div");
      const camera = screen.getByText('Cámara Trasera').closest("div");
      const secondCamera = screen.getByText('Cámara Delantera').closest("div");

      const {productData} = mockProps;

      expect(brand.textContent).toBe(`Marca${productData.brand}`);
      expect(model.textContent).toBe(`Modelo${productData.model}`);
      expect(price.textContent).toBe(`Precio${productData.price}`);
      expect(cpu.textContent).toBe(`CPU${productData.cpu}`);
      expect(ram.textContent).toBe(`RAM${productData.ram}`);
      expect(so.textContent).toBe(`Sistema Operativo${productData.so}`);
      expect(resolution.textContent).toBe(`Resolución de Pantalla${productData.displayResolution}`);
      expect(battery.textContent).toBe(`Bateria${productData.battery}`);
      expect(weight.textContent).toBe(`Peso${productData.weight}`);
      expect(dimensions.textContent).toBe(`Dimensiones${productData.dimentions}`);
      expect(camera.textContent).toBe(`Cámara Trasera${productData.primaryCamera.join(', ')}`);
      expect(secondCamera.textContent).toBe(`Cámara Delantera${productData.secondaryCmera}`);

  });

});
