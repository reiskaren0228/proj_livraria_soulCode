import React, { useState } from 'react';
import hands from "../assets/logo_2.png";
import "./Livros.css"

const Avaliacao = ({ avaliacaoInicial, onAvaliacaoChange }) => {
    const [avaliacao, setAvaliacao] = useState(avaliacaoInicial);

    const handleAvaliacaoClick = (index) => {
        setAvaliacao(index + 1);
        onAvaliacaoChange(index + 1);
    };

    return (
        <div className="avaliacao">
            {[...Array(5)].map((star, index) => (
                <span
                    key={index}
                    className={index < avaliacao ? 'star filled' : 'star'}
                    onClick={() => handleAvaliacaoClick(index)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

const Livro = ({ imagem, titulo, autor, data_da_publicacao, editora, descricao, avaliacaoInicial }) => {
    const handleAvaliacaoChange = (novaAvaliacao) => {
        console.log(`Nova avaliação para o livro ${titulo}: ${novaAvaliacao}`);
        // Aqui você pode adicionar código para salvar a nova avaliação no banco de dados, por exemplo
    };

    return (
        <div className="livro">
            <img src={imagem} alt={`Capa do livro ${titulo}`} />
            <h2>{titulo}</h2>
            <p><strong>Autor:</strong> {autor}</p>
            <p><strong>Data de Publicação:</strong> {data_da_publicacao}</p>
            <p><strong>Editora:</strong> {editora}</p>
            <p><strong>Descrição:</strong> {descricao}</p>
            <Avaliacao avaliacaoInicial={avaliacaoInicial} onAvaliacaoChange={handleAvaliacaoChange} />
        </div>
    );
};

const SecaoLivros = ({ livros }) => {
    return (
        <div className="secao-livros">
            {livros.map((livro, index) => (
                <Livro
                    key={index}
                    imagem={livro.imagem}
                    titulo={livro.titulo}
                    autor={livro.autor}
                    data_da_publicacao={livro.data_da_publicacao}
                    editora={livro.editora}
                    descricao={livro.descricao}
                    avaliacaoInicial={livro.avaliacaoInicial}
                />
            ))}
        </div>
    );
};

function Livros() {
    const livros = [
        {
            imagem: hands,
            titulo: 'Livro 1',
            autor: 'Autor 1',
            data_da_publicacao: '2020-01-01',
            editora: 'Editora 1',
            descricao: 'Descrição do Livro 1',
            avaliacaoInicial: 0
        },
        {
            imagem: hands,
            titulo: 'Livro 2',
            autor: 'Autor 2',
            data_da_publicacao: '2019-05-15',
            editora: 'Editora 2',
            descricao: 'Descrição do Livro 2',
            avaliacaoInicial: 0
        }
        // Adicione mais livros aqui
    ];

    return (
        <div className="App">
            <h1>Livros</h1>
            <SecaoLivros livros={livros} />
        </div>
    );
}

export default Livros;
