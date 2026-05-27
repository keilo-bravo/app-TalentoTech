import React from "react";
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header>
            <h1>Changuchito Premium</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Resenas">Reseñas</Link>
                <Link to="/Orden">Orden</Link>
            </nav>
        </header>
    );
}
export default Header;