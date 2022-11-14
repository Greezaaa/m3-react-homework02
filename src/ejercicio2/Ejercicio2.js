function Ejercicio2() {
    let nombres = ["Jeka", "Willian", "Koldo"]

    console.log(nombres);
    return (

        <ul>
            {nombres.map((nombre, i) => {
                return (
                    <li key={i}>{nombre}</li>
                )
            })
            }
        </ul>
    )
}

export default Ejercicio2