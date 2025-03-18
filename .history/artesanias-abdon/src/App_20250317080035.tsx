import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from "./components/ProductList";
import Navbar from "./components/Header";

function App() {
  return <div>
    <Navbar title="Tienda de cerámica"/>
    <main>
      <p> Bienvenidos </p>
    </main>
    <ProductList/>
    <Footer/>
  </div>
}

export default App;