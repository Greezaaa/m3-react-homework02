import Coche from "./Coche"
function Ejercicio3() {
    let coches = [
        {
            ruedas: 4,
            altura: 1.54,
            longitud: 2.40,
            color: "rojo"
        },
        {
            ruedas: 4,
            altura: 1.54,
            longitud: 2.40,
            color: "verde"
        },
        {
            ruedas: 4,
            altura: 1.54,
            longitud: 2.40,
            color: "naranja"
        }
    ]


    return (

        <ul>
            {coches.map((coche, i) => {
                return (
                    <Coche key={i}
                        ruedas={coche.ruedas}
                        altura={coche.altura}
                        longitud={coche.longitud}
                        color={coche.color}

                    />
                )
            })
            }
        </ul>
    )
}

export default Ejercicio3