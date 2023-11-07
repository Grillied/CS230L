
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Pages/Cards.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home.js'
import Contact from './Pages/Contact.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/card" element={<Card />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
