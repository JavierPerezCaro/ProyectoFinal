// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
  // Estado global simulado con camisetas
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Camiseta Barcelona 2025',
      description: 'Camiseta titular del FC Barcelona temporada 2025',
      price: '120',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/FC_Barcelona_Shirt.svg/800px-FC_Barcelona_Shirt.svg.png',
    },
    {
      id: 2,
      name: 'Camiseta Real Madrid 2025',
      description: 'Camiseta titular del Real Madrid temporada 2025',
      price: '130',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Real_Madrid_CF_crest.svg/800px-Real_Madrid_CF_crest.svg.png',
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Páginas principales */}
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery products={products} setProducts={setProducts} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/about" element={<About />} />

          {/* Productos */}
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
          <Route path="/product/new" element={<ProductForm products={products} setProducts={setProducts} />} />
          <Route path="/product/edit/:id" element={<ProductForm products={products} setProducts={setProducts} />} />

          {/* Ítems (alias de productos para CRUD simulado) */}
          <Route path="/item/:id" element={<ItemDetail products={products} />} />
          <Route path="/crear" element={<ItemForm products={products} setProducts={setProducts} />} />
          <Route path="/editar/:id" element={<ItemForm products={products} setProducts={setProducts} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
