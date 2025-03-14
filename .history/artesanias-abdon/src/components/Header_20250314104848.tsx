import React from "react";
import '../styles/Header.css';

const Header = ({ title }) => {
    return (
        <header className="bg-green-600 text-white py-4 text-center">
            <h1 className="text-3xl font-bold">Artesanías Abdon {title}</h1>
            <nav className="mt-4">
                <ul className="flex justify-center space-x-6">
                    <li><a href="/" className="hover:text-green-200">Inicio</a></li>
                    <li><a href="/productos" className="hover:text-green-200">Productos</a></li>
                    <li><a href="/contacto" className="hover:text-green-200">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;