import React from "react";
function Producto({
    id,
    categoryId,
    name,
    description,
    price,
    image,
    stock,
    featured}){
    return (
        <div className="card">
            <div className="img">
                <img className="imgRes" src={image} alt={name} />
            </div>
            <div className="content">
                <h1 >{name}</h1>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}
export default Producto;