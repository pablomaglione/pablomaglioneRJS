import './App.css';
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar";


function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
      </div>
      <hr />
      <div>
        <ItemListContainer titulo="Productos" />
      </div>
    </div>

  );
}

export default App;
