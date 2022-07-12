
import './App.css';
import MainMenu from './Component/MainMenu/MainMenu'
import {BrowserRouter, Routes,Route} from "react-router-dom";
// Routes
import Home from './Routes/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainMenu/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
