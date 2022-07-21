import './App.css';

import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
        </div>
        <div><ItemListContainer /></div>
       { /*<Routes>
          <Route index path="/" element={<ItemListContainer />} />
          <Route path='/categoty/:name' element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
  </Routes>*/}
      </BrowserRouter>
    </>

  );
}

export default App;
