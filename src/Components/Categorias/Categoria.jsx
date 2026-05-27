import React from "react";
import Productos from "../Productos/Productos";
import { Link } from "react-router-dom";
function Categoria({
    id,
    name,
    image,}){
    return (
         <Link className="cat" label={name} key={id} to={"/"+name} element={<Productos categoria={id}/>} >
            <div className="catDiv">

                <img className="imgCat" src={image} alt={name} />
            </div>
                <h2  className="tituloCat">{name}</h2>
        </Link>
    );
}
export default Categoria;