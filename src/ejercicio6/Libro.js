import { useState, useEffect } from 'react';
function Libro({ autor, descripcion, editorial, img, stock, titulo, btn }) {

    let [bookStock, setBookStock] = useState(stock)

    useEffect(() => {
        const bookStock = () => {
            setBookStock(bookStock)
        }
    })

    return (
        <div className="libro" >
            <h2>{titulo}</h2>
            <img src={img} alt={titulo} width="200" referrerPolicy='no-referrer' />
            <p>disponibles: {(bookStock > 0) ? bookStock : "No hay stock"}</p>
            {((bookStock > 0) && btn) ? <button onClick={() => setBookStock(bookStock - 1)}>Reservar</button> : <></>}
            <h4>{autor}</h4>
            <h4>{editorial}</h4>
            <p>{descripcion}</p>
        </div>
    )
}

export default Libro