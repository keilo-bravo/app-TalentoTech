import './App.css'
import Layout from './Components/Layout/Layout.jsx';
import Productos from './Components/Productos/Productos.jsx';
import Categorias from './Components/Categorias/Categorias.jsx';
import Carrito from './Components/Carrito/Carrito.jsx';
// import Formulario from './Components/Formulario/Formulario.jsx';
import Resenhas from './Components/Reseñas/Resenhas.jsx';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
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

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<h1>Bienvenido a Changuchito Premium</h1>} />
        <Route path="/Menu" element={<Categorias />} />
        {
            categorias.map((prod)=>{
                return (
                  <Route path={"/" + prod.name} element={<Productos categoria={prod.id} />} />    
                )
            })
        }
        {/* <Route path="/alta" element={<Formulario />} /> */}
        <Route path="/Resenas" element={<Resenhas />} />
        <Route path="/Orden" element={<Carrito />} />
      </Route>
    </Routes>
  )
}

export default App