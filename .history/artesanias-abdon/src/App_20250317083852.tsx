import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from "./components/ProductList";

function App() {
  return <div>
    <Header/>
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Bienvenido a Artesanías Abdon</h1>
      <p className="mt-2">Tu tienda de cerámica artesanal.</p>
    </div>
    <ProductList/>
    <Footer/>
  </div>
}

export default App;