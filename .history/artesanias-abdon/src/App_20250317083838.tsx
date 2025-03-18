import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from "./components/ProductList";

function App() {
  return <div>
    <Header/>
    <main>
      <p className="mt-2"> Bienvenido a Artesanías Abdón </p>
    </main>
    <ProductList/>
    <Footer/>
  </div>
}

export default App;