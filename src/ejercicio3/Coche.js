function Coche({ ruedas, altura, longitud, color }) {
    return (
        <li >
            <p>{ruedas}</p>
            <p>{altura}</p>
            <p>{longitud}</p>
            <p>{color}</p>
        </li>
    )
}

export default Coche