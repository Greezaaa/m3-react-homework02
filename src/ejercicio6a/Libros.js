import Libro from "./Libro"

const Libros = ({ libros, setLibros }) => {
    return (
        libros.map((libro) => {
            return (
                <Libro
                    key={libro.id}
                    libro={libro}
                    libros={libros}
                    setLibros={setLibros}
                    btn={true}
                />
            )

        })

    )
}

export default Libros