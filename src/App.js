import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Details from './components/Details';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <div className='app'>
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </div>
  );
}

export default App;
