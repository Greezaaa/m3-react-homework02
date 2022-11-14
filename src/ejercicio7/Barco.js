import { useState } from 'react'
function Barco({ nombre, eslora, tripulantes }) {

    let [tripulante, setTripulante] = useState(tripulantes)

    return (
        <>
            <h3>{nombre}</h3>
            <p>{eslora}</p>
            <p>{tripulante}</p>

            <button onClick={() => setTripulante(tripulante + 1)}>Cambiar status</button>
        </>
    )
}

export default Barco