import './App.css';

import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route index element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<div>Cart</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
