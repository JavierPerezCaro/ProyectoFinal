import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/home/Home';
import Contacto from './Pages/contacto/Contacto';
import Gallery from './Pages/gallery/Gallery';
import About from './Pages/about/About';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/navbar/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/about" element={<About />} />  
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
