import React from "react";
function Resenha({ 
    id,
    user,
    rating,
    comment,
    image}){
    return (
            <div key={id} className="review">
                <div className="resDiv">
                    <img className="imgRes" src={image} alt={user} />
                </div>
                <div className="content">
                    <h1 >{user}</h1>
                    <p>{rating}</p>
                    <p>{comment}</p>
                </div>
            </div>
    );
}
export default Resenha;