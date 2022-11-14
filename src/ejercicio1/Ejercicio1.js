function Ejercicio1() {
    let evento = {
        nombre: "Salsa dance party",
        fecha: "24/07/2020",
        hora: "16:00",
        lugar: {
            direccion: "Done Bikendi Kalea, 2",
            ciudad: "Bilbao"
        }

    }
    return (
        <>
            <h2>{evento.nombre}</h2>
            <p>{evento.fecha}</p>
            <p>{evento.hora}</p>
            <p>{evento.lugar.direccion}</p>
            <p>{evento.lugar.ciudad}</p>
        </>
    )
}

export default Ejercicio1