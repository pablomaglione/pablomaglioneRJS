import './App.css';

import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './contexts/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route index element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<div>Cart</div>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
