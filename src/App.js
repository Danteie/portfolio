
import './App.css';
import MainMenu from './Component/MainMenu/MainMenu'
import {BrowserRouter, Routes,Route} from "react-router-dom";
//Animated Background
import ParticlesBg from 'particles-bg'
// Routes
import Home from './Routes/Home/Home'
import Skils from './Routes/Skils/Skils'
import Projects from './Routes/Projects/Projects'
import Contact from './Routes/Contact/Contact'

function App() {
  

  return (
    <BrowserRouter>
      <ParticlesBg num={300} color="#00E6F6" type="cobweb" bg={true} />
      <div className="App">
        <MainMenu/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/skils" element={<Skils />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
