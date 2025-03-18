import React from 'react';
import '../styles/ProductList.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Jarrón Azul', price: 25.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Plato Decorativo', price: 15.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Taza Artesanal', price: 12.99, image: 'https://via.placeholder.com/150' },
];

const ProductList: React.FC = () => {
  return (
    <section className="product-list">
      <h2>Nuestros Productos</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;