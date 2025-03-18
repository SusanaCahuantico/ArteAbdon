import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <p>© 2025 Artesanías Abdon. Todos los derechos reservados.</p>
            <p>
                <a href="#politica-de-privacidad" className="text-blue-400">Política de Privacidad</a> | 
                <a href="#terminos-y-condiciones" className="text-blue-400">Términos y Condiciones</a>
            </p>
        </footer>
    );
};

export default Footer;