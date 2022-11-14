import Barco from './Barco'
function Main({ barcos }) {
    return (
        <>
            {
                barcos.map((barco, i) => {
                    return (
                        <Barco key={i} nombre={barco.nombre} eslora={barco.eslora} tripulantes={barco.tripulantes} />
                    )
                })}
        </>
    )
}

export default Main