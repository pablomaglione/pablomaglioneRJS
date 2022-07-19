import './App.css';

import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
      </div>
      <div>
        {/*<ItemListContainer />*/}
        {<ItemDetailContainer/>}
      </div>
    </div>
  );
}

export default App;
