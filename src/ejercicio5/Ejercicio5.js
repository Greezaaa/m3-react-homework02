import { useState } from 'react';
function Ejercicio5() {
    // Crea una aplicación en la que tienes un array de 3 nombres. Al cargar la página se
    // muestra el primer elemento del array en un h1. Añade un botón, y cuando se haga
    // click, mostraremos el segundo nombre. Con otro click mostraremos el tercero y con
    // otro click volveremos a mostrar el primero (y así sucesivamente).
    let nombres = ["jeka", "willian", "felipe"]
    let [count, setCount] = useState(0)
    function printName() {
        if (count < nombres.length - 1) { setCount(count + 1) } else {
            setCount(0)
        }
    }

    return (
        <>
            {
                <h1>{nombres[count]}</h1>
            }
            <button onClick={printName}>Cambiar Nombre</button>
        </>
    )
}

export default Ejercicio5
