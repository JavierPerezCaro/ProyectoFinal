import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/home/Home';
import Contacto from './Pages/contacto/Contacto';
import Gallery from './Pages/gallery/Gallery';
import About from './Pages/about/About';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/navbar/footer/Footer';
import ProductDetail from './Components/navbar/productdetail/ProductDetail';
import ProductForm from './Components/navbar/productform/ProductForm';
import ItemDetail from './Pages/itemditail/ItemDetail';
import ItemForm from './Pages/itemform/ItemForm';
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
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product/new" element={<ProductForm />} />
          <Route path="/product/edit/:id" element={<ProductForm />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/crear" element={<ItemForm />} />
          <Route path="/editar/:id" element={<ItemForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
