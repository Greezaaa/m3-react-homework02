import Libros from "./Libros"

const Main = ({ libros, setLibros }) => {

    return (
        <>
            <Libros libros={libros} setLibros={setLibros} />
        </>
    )
}
export default Main