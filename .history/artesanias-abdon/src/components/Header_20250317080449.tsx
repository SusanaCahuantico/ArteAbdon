import React from 'react';

const Header = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <ul className="flex justify-around text-white">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Header;