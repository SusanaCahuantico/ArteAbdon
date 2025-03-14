import React from "react";
import '../styles/Header.css';

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>Artesanías Abdon {title}</h1>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/productos">Productos</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;