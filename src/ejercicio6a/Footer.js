import Libro from "./Libro"

const Footer = ({ libro, setLibros, libros }) => {

    return (
        <>
            <Libro libro={libro} libros={libros} setLibros={setLibros} btn={false} />
        </>
    )/* A component that is being exported. */
}
export default Footer