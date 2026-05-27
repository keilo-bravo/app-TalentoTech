import React from "react";
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header>
            <h1>Changuchito Premium</h1>
            <nav>
                <Link to="/app-TalentoTech/">Inicio</Link>
                <Link to="/app-TalentoTech/Menu">Menu</Link>
                <Link to="/app-TalentoTech/Resenas">Reseñas</Link>
                <Link to="/app-TalentoTech/Orden">Orden</Link>
            </nav>
        </header>
    );
}
export default Header;