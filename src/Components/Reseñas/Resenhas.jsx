import React, { useState, useEffect } from 'react';
import Resenha from "./Resenha"
import "./Resenha.css"
import Formulario from "../Formulario/Formulario.jsx";
function Resenhas(){
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}Data/Data.json`)
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de las reseñas');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setReviews(datos.reviews);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);
    if (cargando) return <p>Cargando reseñas, por favor espere...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
            <div className="reviews">
                {
                    reviews?.length >0 ?
                    <>
                        {
                            reviews.map((e)=>{
                                return (
                                    <Resenha 
                                        key={e.id}
                                        {...e}
                                    />
                                )
                            })
                        }
                    </>
                    :
                    <p>No Hay reseñas actualmente, Se el primero en calificarnos!!!!</p>
                }
            </div>
            <Formulario/>
        </>
        
    );
}
export default Resenhas;