import React from 'react';

const ProductList = ({ name, price, image }) => {
    return (
        <div className="border p-4 rounded-lg shadow-lg">
            <img src={image} alt={name} className="w-full h-48 object-cover"/>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-lg">${price}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Agregar al carrito</button>
        </div>
    );
};

export default ProductList;