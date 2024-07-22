import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { adicionarLivro } from "../firebase/livros"
import toast from "react-hot-toast"
import { useNavigate, Navigate } from "react-router-dom"
import { useContext } from "react"
import UsuarioContext from "../context/UsuarioContext"


function AdicionarLivro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const usuario = useContext(UsuarioContext)
  const navigate = useNavigate()

  function salvarLivro(data) {
    
    data.idUsuario = usuario.uid;
    adicionarLivro(data)
      .then(() => {
        toast.success("Livro adicionado com sucesso!")
        navigate("/livros")
      })
      .catch(() => {
        toast.error("Um erro aconteceu ao adicionar o livro!")
      })
  }

  if (usuario === null) {
    return <Navigate to="/login" />
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(salvarLivro)}>
        <h1>Adicionar Livro</h1>
        <hr />
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            {...register("titulo", { required: true, maxLength: 200 })}
          />
          {errors.titulo && (
            <small className="invalid">O título é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="autor">Autor</label>
          <input
            type="text"
            id="autor"
            className="form-control"
            {...register("autor", { required: true })}
          />
          {errors.autor && (
            <small className="invalid">O autor é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="data_da_publicacao">Data de Publicação</label>
          <input
            type="date"
            id="data_da_publicacao"
            className="form-control"
            {...register("data_da_publicacao", { required: true })}
          />
          {errors.data_da_publicacao && (
            <small className="invalid">A data de publicação é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="editora">Editora</label>
          <input
            type="text"
            id="editora"
            className="form-control"
            {...register("editora", { required: true })}
          />
          {errors.editora && (
            <small className="invalid">A editora é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            className="form-control"
            {...register("descricao", { required: true })}
          ></textarea>
          {errors.descricao && (
            <small className="invalid">A descrição é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="imagem">Imagem (URL)</label>
          <input
            type="text"
            id="imagem"
            className="form-control"
            {...register("imagem", { required: true })}
          />
          {errors.imagem && (
            <small className="invalid">A URL da imagem é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            className="form-select"
            {...register("categoria", { required: true })}
          >
            <option value="Front-end">Front-end</option>
            <option value="Back-end">Back-end</option>
            <option value="DevOps">DevOps</option>
            <option value="Data Science">Data Science</option>
          </select>
          {errors.categoria && (
            <small className="invalid">A categoria é inválida!</small>
          )}
        </div>
        <Button variant="dark" className="w-100 mt-1" type="submit">
          Adicionar Livro
        </Button>
      </form>
    </main>
  )
}

export default AdicionarLivro;
