import Navbar from "./components/Navbar/Navbar";
import Nosotros from "./components/Nosotros/Nosotros";
import Servicios from "./components/Servicios/Servicios";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import Contacto from './components/Contacto/Contacto'

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/servicios' element={<Servicios/>}/>
            <Route path='/contacto' element={<Contacto/>}/>            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
