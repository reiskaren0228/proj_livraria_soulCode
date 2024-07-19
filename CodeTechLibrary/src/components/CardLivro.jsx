import React, { useState } from "react"
import "./CardLivro.css"

const CardLivro = ({
  imagem,
  titulo,
  autor,
  data_da_publicacao,
  editora,
  descricao,
}) => {
  const [curtido, setCurtido] = useState(false)

  // Função para o botão de curtida
  const handleCurtida = () => {
    setCurtido(!curtido)
  }

  return (
    <div className="card-livro">
      <img src={imagem} alt={`Capa do livro ${titulo}`} />
      <h2 className="titulo-card">{titulo}</h2>
      <p className="livro-info">
        <strong>Autor:</strong> {autor}
      </p>
      <p className="livro-info">
        <strong>Publicado em:</strong> {data_da_publicacao}
      </p>
      <p className="livro-info">
        <strong>Editora:</strong> {editora}
      </p>
      <p className="livro-descricao">
        <strong>Descrição: </strong>
        {descricao}
      </p>
      <button
        className={`button ${curtido ? "curtido" : ""}`}
        onClick={handleCurtida}
      >
        ❤
      </button>
    </div>
  )
}

export default CardLivro
