import { useState, useEffect } from "react";
import "./CardLivro.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CardLivro = ({ imagem, titulo, autor, data_da_publicacao, editora, descricao }) => {
  const [curtido, setCurtido] = useState(false);
  const [estrelas, setEstrelas] = useState(0);
  const [comentario, setComentario] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(titulo)) || {};
    setCurtido(savedData.curtido || false);
    setEstrelas(savedData.estrelas || 0);
    setComentario(savedData.comentario || "");
  }, [titulo]);

  const saveToLocalStorage = (data) => {
    localStorage.setItem(titulo, JSON.stringify(data));
  };

  const handleCurtida = () => {
    const newCurtido = !curtido;
    setCurtido(newCurtido);
    saveToLocalStorage({ curtido: newCurtido, estrelas, comentario });
  };

  const handleEstrela = (rating) => {
    setEstrelas(rating);
    saveToLocalStorage({ curtido, estrelas: rating, comentario });
  };

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
    saveToLocalStorage({ curtido, estrelas, comentario: e.target.value });
  };

  const handleAdicionar = () => {
    const livro = { imagem, titulo, autor, data_da_publicacao, editora, descricao };
    const listaDesejos = JSON.parse(localStorage.getItem('listaDesejos')) || [];
    listaDesejos.push(livro);
    localStorage.setItem('listaDesejos', JSON.stringify(listaDesejos));

    navigate("/livros");
    alert("Item adicionado à sua lista de desejos");
  };

  return (
    <div className='card-livro'>
      <img src={imagem} alt={`Capa do livro ${titulo}`} />
      <h2 className='titulo-card'>{titulo}</h2>
      <p className='livro-info'><strong>Autor:</strong> {autor}</p>
      <p className='livro-info'><strong>Publicado em:</strong> {data_da_publicacao}</p>
      <p className='livro-info'><strong>Editora:</strong> {editora}</p>
      <p className='livro-descricao'><strong>Descrição:</strong> {descricao}</p>
      <div className='stars'>
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            className={`star ${rating <= estrelas ? "active" : ""}`}
            onClick={() => handleEstrela(rating)}
          >
            ★
          </span>
        ))}
      </div>
      <div className='comment-box'>
        <textarea
          value={comentario}
          onChange={handleComentarioChange}
          placeholder='Deixe seu comentário'
        />
      </div>
      <div className='botoes'>
        <button
          className={`button ${curtido ? "curtido" : ""}`}
          onClick={handleCurtida}
        >
          ❤
        </button>
        <button className='botao2' onClick={handleAdicionar}>
          Adicionar à lista de desejos
        </button>
      </div>
    </div>
  );
};

CardLivro.propTypes = {
  imagem: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  data_da_publicacao: PropTypes.string.isRequired,
  editora: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default CardLivro;
