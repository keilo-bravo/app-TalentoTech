import React, { useState, useRef } from 'react';

function Formulario() {

    const [datosForm, setDatosForm] = useState({
        user: '',
        rating: 0,
        comment: '',
        image: ''
    });
    const fileInputRef = useRef(null);
    const apiKey = import.meta.env.VITE_API_KEY_IMGBB;
    const urlImgbb = import.meta.env.VITE_URL_IMGBB;
    const [imagenFile, setImagenFile] = useState(null);

    const handleChange = (evento) => {
        const { name, value } = evento.target;
        setDatosForm({ ...datosForm, [name]: value });
    };

    const handleChangeImage = (evento) => {
        setImagenFile(evento.target.files[0]);
    };

    const manejarEnvio = async (evento) => {
        evento.preventDefault();
        
        if (!imagenFile) {
            alert("Por favor, selecciona una imagen para el producto.");
            return;
        }

        const formData = new FormData();
        formData.append('image', imagenFile);
        try {
            console.log("Subiendo imagen a Imgbb...");
            const respuestaImgbb = await fetch(`${urlImgbb}?key=${apiKey}`, {
                method: 'POST',
                body: formData,
            });
            const datosImgbb = await respuestaImgbb.json();

            if (datosImgbb.success) {
                const productoCompleto = {
                    ...datosForm,
                    urlImagen: datosImgbb.data.url
                };
                console.log('Enviando los siguientes datos COMPLETOS a la API:', productoCompleto);
                alert("Tu opinion fue cargada con exito, gracias por tu tiempo!");
                setDatosForm({
                    user: '',
                    rating: 0,
                    comment: '',
                    image: ''
                });
                setImagenFile(null);
                if (fileInputRef.current) {
                fileInputRef.current.value = ""; 
            }
            } else {
                throw new Error('La subida de la imagen a Imgbb falló.');
            }
        } catch (error) {
            console.error("Error en el proceso de envío:", error);
            alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
        }
    };

    return (
        <form onSubmit={manejarEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Tu Opinion nos importa</h2>
             
            <label>Indicanos tu nombre:</label>
            <input 
                type="text" 
                name="user" 
                placeholder="Mateo?, Juli?, etc..."
                value={datosForm.user}
                onChange={handleChange}
                required
            />
            
            <label>Califica ti pedido:</label>
            <input 
                type="float" 
                name="rating"
                value={datosForm.rating}
                onChange={handleChange}
                required
            />
            
            <label>Dejanos ti comentario:</label>
            <input 
                type="text" 
                name="comment" 
                placeholder="Mi pedido fue..." 
                value={datosForm.comment}
                onChange={handleChange}
                required
            />
            
            <label>Imagen:</label>
            <input 
                type="file" 
                placeholder="https://…" 
                ref={fileInputRef}
                onChange={handleChangeImage} />

             <button 
                type="submit">Guardar Reseña</button>
        </form>
    );
}

export default Formulario;