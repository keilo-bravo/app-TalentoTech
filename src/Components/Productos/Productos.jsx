import React, { useState, useEffect } from 'react';
import './Productos.css'
import Producto from "./Producto"

function Productos({ categoria }) {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
    
    useEffect(() => {
        fetch('/Data/Data.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de los productos');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProductos(datos.products.filter((prod) => prod.categoryId === categoria));
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, [categoria]);
    if (cargando) return <p>Cargando productos, por favor espere...</p>;
    if (error) return <p>Error: {error}</p>;
    console.log(categoria);
    return (
        <div className="productos">
            {
                productos?.length >0 ?
                <>
                    {
                        productos.map((prod)=>{
                            return (
                                <Producto 
                                    key={prod.id}
                                    {...prod}
                                />
                            )
                        })
                    }
                </>
                :
                <p>No Hay productos disponibles</p>
            }
        </div>
    );
}
export default Productos;