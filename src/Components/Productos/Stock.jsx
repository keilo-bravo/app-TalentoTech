// import React, { useState } from 'react';

// export function Contador({ nombre, stock }) {
//     const [cantidad, setCantidad] = useState(0);

//     const incrementar = () => {
//         if (cantidad < stock) {
//             setCantidad(cantidad + 1);
//         }
//     };

//     const decrementar = () => {
//         if (cantidad > 1) {
//             setCantidad(cantidad - 1);
//         }
//     };

//     const agregarAlCarrito = () => {
//         alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
//     };

//     return (
//         <div>
//             <button onClick={decrementar}>-</button>
//             <span>{cantidad}</span>
//             <button onClick={incrementar}>+</button>
//             <br />
//             <button onClick={agregarAlCarrito} disabled={cantidad === 0}>
//                 Comprar
//             </button>
//         </div>
//     );
// }