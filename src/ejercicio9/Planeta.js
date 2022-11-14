function Planeta({ nombre, color, temperatura, imagen }) {

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre} width="300" />
            <p>{color} {temperatura}</p>
        </div>
    )
}

export default Planeta