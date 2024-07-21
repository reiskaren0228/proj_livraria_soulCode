import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UsuarioContext from "../context/UsuarioContext"
import { deleteLivro } from "../firebase/livros"
import toast from "react-hot-toast"
import Button from "react-bootstrap/Button"
import "./Livros.css"
import Loader from "../components/Loader"

const Livros = ({ livros }) => {
  const navigate = useNavigate()
  const usuario = useContext(UsuarioContext)
  const [isLoading, setIsLoading] = useState(true)
  const [livrosList, setLivrosList] = useState([])

  useEffect(() => {
    if (!usuario) {
      navigate("/login")
    } else {
      // Simulando o carregamento dos dados
      setTimeout(() => {
        setLivrosList(livros)
        setIsLoading(false)
      }, 1000) // Ajuste o tempo conforme necessário
    }
  }, [usuario, livros, navigate])

  const handleEditar = (id) => {
    navigate(`/editar-livro/${id}`)
  }

  const handleDeleteLivro = (id) => {
    const deletar = confirm("Tem certeza que deseja deletar este livro?")
    if (deletar) {
      deleteLivro(id).then(() => {
        toast.success("Livro removido com sucesso")
        setLivrosList((prevLivros) =>
          prevLivros.filter((livro) => livro.id !== id)
        )
      })
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <main>
      <div>
        <h1>Lista de Livros</h1>
        <div className="lista-livros">
          {livrosList.map((livro) => (
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
              <div className="botao">
                <Button variant="warning" onClick={() => handleEditar(livro.id)}>Editar</Button>
                <Button variant="danger" onClick={() => handleDeleteLivro(livro.id)}>Deletar</Button>
                <Button variant="success">Comprar</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Livros
