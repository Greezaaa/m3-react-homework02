import Libro from "./Libro";

function Libros({ libros }) {
    return (
        < >
            {
                libros.map((libro, i) => {
                    return (
                        <Libro
                            key={libro.id}
                            autor={libro.autor}
                            descripcion={libro.descripcion}
                            editorial={libro.editorial}
                            img={libro.img}
                            stock={libro.stock}
                            btn={true}
                            titulo={libro.titulo}
                        />
                    )
                })

            }
        </ >
    )
}

export default Libros