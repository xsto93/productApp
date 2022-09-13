import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { ProductList, ProductDetail } from './views';
import { Breadcrum, Navbar } from './shared/components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar title="ProductApp">
          <Breadcrum />
        </Navbar>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
