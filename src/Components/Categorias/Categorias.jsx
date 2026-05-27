import React, { useState, useEffect } from 'react';
import './Categorias.css';
import Categoria from "./Categoria"

function Categorias(){
    const [categorias, setCategorias] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}Data/Data.json`)
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de los categorias');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setCategorias(datos.categories);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);
    if (cargando) return <p>Cargando categorias, por favor espere...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="categorias">
            {
                categorias?.length >0 ?
                <>
                    {
                        categorias.map((prod)=>{
                            return (
                                <Categoria 
                                    key={prod.id}
                                    {...prod}
                                />
                            )
                        })
                    }
                </>
                :
                <p>No Hay categorias disponibles</p>
            }
        </div>
    );
}
export default Categorias;