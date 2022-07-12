import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar";


function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
      </div>
      <div>
        <ItemListContainer titulo="Productos" />
      </div>
      <div>
        <ItemCount stock={10} initial={0} btn={true}/>
      </div>
    </div>

  );
}

export default App;
