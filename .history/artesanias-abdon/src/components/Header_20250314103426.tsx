import React from "react";
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Artesanías Abdon</h1>
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

export default Header