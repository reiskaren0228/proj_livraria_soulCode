
import "./Livros.css"
import { useNavigate } from "react-router-dom"

const Livros = ({ livros }) => {
  const navigate = useNavigate()

  const handleEditar = (id) => {
    navigate(`/editar-livro/${id}`)
  }

  return (
    <div>
      <h1>Lista de Livros</h1>
      <div className="lista-livros">
        {livros.map((livro, index) => (
          <div key={index} className="card-livro">
            <img src={livro.imagem} alt={`Capa do livro ${livro.titulo}`} />
            <h2 className="titulo-card">{livro.titulo}</h2>
            <p className="livro-info">
              <strong>Autor:</strong> {livro.autor}
            </p>
            <p className="livro-info">
              <strong>Publicado em:</strong> {livro.data_da_publicacao}
            </p>
            <p className="livro-info">
              <strong>Editora:</strong> {livro.editora}
            </p>
            <p className="livro-descricao">
              <strong>Descrição: </strong>
              {livro.descricao}
            </p>
            <button onClick={() => handleEditar(livro.id)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Livros
