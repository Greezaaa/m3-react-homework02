import { useState } from "react";

const Libro = ({ libro, btn, setLibros, libros }) => {
    const reservar = () => {
        let copiaLibros = [...libros]

        copiaLibros.forEach(l => {
            if (l.id == libro.id) {
                l.stock--
            }
        });
        setLibros(copiaLibros)
    }




    return (
        <>
            <h2>{libro.titulo}</h2>
            <p>{libro.stock}</p>
            {btn ? <button onClick={() => reservar()}>Reservar</button> : <></>}
        </>
    )
}

export default Libro