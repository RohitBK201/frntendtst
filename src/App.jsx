import logo from './logo.svg';
import './App.css';
import { DatTable, Table } from './components/table';
import { Addcty } from './components/addcity';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<DatTable/>} />
        <Route path='/add-city' element={<Addcty/>} />
      </Routes>

    </div>
  );
}

export default App;
