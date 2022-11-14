import { useState } from 'react'
import Planeta from './Planeta'
import './planetas.css'
function SistemaSolar({ sistemaSolar }) {

    function removeLastPlaneta() {
        return setPlanetas(
            planetas.filter((planeta, index) => index < planetas.length - 1)
        )
    }
    function removeThisPlaneta(name) {
        return setPlanetas(
            planetas.filter((planeta, index) => planeta.nombre !== name)
        )
    }
    const [planetas, setPlanetas] = useState(sistemaSolar)

    return (

        <div class="planetas">
            {planetas.map((planeta, i) => {

                return (

                    <div class="planeta">
                        <Planeta
                            key={i}
                            nombre={planeta.nombre}
                            color={planeta.color}
                            temperatura={planeta.temperatura}
                            imagen={planeta.imagen}
                        />
                        <button class="btn btn-remove" onClick={() => removeThisPlaneta(planeta.nombre)}>Remove {planeta.nombre} planet</button>
                    </div>
                )
            })
            }
            <button onClick={removeLastPlaneta}>Remove Last planet</button>
        </div>
    )
}
export default SistemaSolar