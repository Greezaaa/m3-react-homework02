import Libro from "./Libro";

function Footer({ libro }) {


    return (
        <footer>
            <h2>Libro de la semana</h2>
            <Libro
                id={libro.id}
                autor={libro.autor}
                descripcion={libro.descripcion}
                editorial={libro.editorial}
                img={libro.img}
                stock={libro.stock}
                btn={false}
                titulo={libro.titulo}
            />
        </footer>
    )
}


export default Footer