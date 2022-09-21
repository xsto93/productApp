import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProductList, ProductDetail } from './views';
import { Breadcrumb, Navbar } from './shared/components';
import { Provider } from 'react-redux';
import reduxStore from './core/store/store';
import './App.css';
function App() {
    return (<div className="App">
      <BrowserRouter>
        <Provider store={reduxStore}>
          <Navbar title="ProductApp">
            <Breadcrumb />
          </Navbar>
          <main className="main-content">
            <Routes>
              <Route path="/products" element={<ProductList />}/>
              <Route path="/products/:id" element={<ProductDetail />}/>
              <Route path="*" element={<Navigate to="/products" replace/>}/>
            </Routes>
          </main>
        </Provider>
      </BrowserRouter>
    </div>);
}
export default App;
