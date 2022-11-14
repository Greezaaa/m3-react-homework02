import { useState } from 'react';
function Ejercicio4() {

    let [contador, setContador] = useState(0)
    function addOne() {
        setContador(contador + 1)
    }
    return (

        <>
            <p>{contador}</p>
            <button onClick={addOne}>Click Me +1</button>
        </>
    )
}

export default Ejercicio4