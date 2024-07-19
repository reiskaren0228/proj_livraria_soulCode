import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import UsuarioContext from "../context/UsuarioContext"
import { deleteLivro } from "../firebase/livros"
import toast from "react-hot-toast"
import Button from "react-bootstrap/Button"
import "./Livros.css"

const Livros = ({ livros }) => {
  const navigate = useNavigate()
  const usuario = useContext(UsuarioContext)

  const handleEditar = (id) => {
    navigate(`/editar-livro/${id}`)
  }

  const handleDeleteLivro = (id) => {
    const deletar = confirm("Tem certeza que deseja deletar este livro?")
    if (deletar) {
      deleteLivro(id).then(() => {
        toast.success("Livro removido com sucesso")
      })
    }
  }

  useEffect(() => {
    if (!usuario) {
      navigate("/login")
    }
  }, [])

  return (
    <div>
      <h1>Lista de Livros</h1>
      <div className="lista-livros">
        {livros.map((livro) => (
          <div key={livro.id} className="card-livro">
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
            <Button onClick={() => handleEditar(livro.id)}>Editar</Button>
            <Button onClick={() => handleDeleteLivro(livro.id)}>Deletar</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Livros
