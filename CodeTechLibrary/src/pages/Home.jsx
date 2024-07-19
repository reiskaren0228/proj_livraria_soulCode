import { useState } from "react";
import CardLivro from "../components/CardLivro"
import "./Home.css"

const livrosData = [
  {
    imagem: "https://m.media-amazon.com/images/I/619FY8Lx4sL._SL1500_.jpg",
    titulo: "Guia Front-End",
    autor: "Autor 1",
    data_da_publicacao: "2021",
    editora: "Editora 1",
    descricao: "O Caminho Para Ser Um Dev Front-End",
    categoria: "Front-end",
  },
  {
    imagem:
      "https://www.casadocodigo.com.br/cdn/shop/products/Sass_ebook_large.jpg?v=1631650381",
    titulo: "Sass",
    autor: "Autor 2",
    data_da_publicacao: "2020",
    editora: "Editora 2",
    descricao: "Aprendendo pré-processadores CSS",
    categoria: "Front-end",
  },
  {
    imagem: "caminho/para/imagem3.jpg",
    titulo: "Livro 3",
    autor: "Autor 3",
    data_da_publicacao: "2019",
    editora: "Editora 3",
    descricao: "Descrição do livro 3",
    categoria: "Back-end",
  },
  {
    imagem: "caminho/para/imagem4.jpg",
    titulo: "Livro 4",
    autor: "Autor 4",
    data_da_publicacao: "2018",
    editora: "Editora 4",
    descricao: "Descrição do livro 4",
    categoria: "Back-end",
  },
  {
    imagem: "caminho/para/imagem5.jpg",
    titulo: "Livro 5",
    autor: "Autor 5",
    data_da_publicacao: "2017",
    editora: "Editora 5",
    descricao: "Descrição do livro 5",
    categoria: "DevOps",
  },
  {
    imagem: "caminho/para/imagem6.jpg",
    titulo: "Livro 6",
    autor: "Autor 6",
    data_da_publicacao: "2016",
    editora: "Editora 6",
    descricao: "Descrição do livro 6",
    categoria: "DevOps",
  },
  {
    imagem: "caminho/para/imagem7.jpg",
    titulo: "Livro 7",
    autor: "Autor 7",
    data_da_publicacao: "2015",
    editora: "Editora 7",
    descricao: "Descrição do livro 7",
    categoria: "Data Science",
  },
  {
    imagem: "caminho/para/imagem8.jpg",
    titulo: "Livro 8",
    autor: "Autor 8",
    data_da_publicacao: "2014",
    editora: "Editora 8",
    descricao: "Descrição do livro 8",
    categoria: "Data Science",
  },
  {
    imagem:
      "https://www.casadocodigo.com.br/cdn/shop/products/HTML5eCSS3_ebook_large.jpg?v=1631720433",
    titulo: "Html e CSS",
    autor: "Autor 9",
    data_da_publicacao: "2013",
    editora: "Editora 9",
    descricao: "Domine a web do futuro com esse livro",
    categoria: "Front-end",
  },
  {
    imagem: "caminho/para/imagem10.jpg",
    titulo: "Livro 10",
    autor: "Autor 10",
    data_da_publicacao: "2012",
    editora: "Editora 10",
    descricao: "Descrição do livro 10",
    categoria: "Back-end",
  },
  {
    imagem: "caminho/para/imagem11.jpg",
    titulo: "Livro 11",
    autor: "Autor 11",
    data_da_publicacao: "2011",
    editora: "Editora 11",
    descricao: "Descrição do livro 11",
    categoria: "DevOps",
  },
  {
    imagem: "caminho/para/imagem12.jpg",
    titulo: "Livro 12",
    autor: "Autor 12",
    data_da_publicacao: "2023",
    editora: "Editora 12",
    descricao: "Descrição do livro 12",
    categoria: "Data Science",
  },
]
const SecaoLivros = ({ titulo, livros, adicionarLivro }) => {
  return (
    <div className="secao-livros">
      <h2>{titulo}</h2>
      <div className="livros-container">
        {livros.map((livro, index) => (
          <CardLivro
            key={index}
            imagem={livro.imagem}
            titulo={livro.titulo}
            autor={livro.autor}
            data_da_publicacao={livro.data_da_publicacao}
            editora={livro.editora}
            descricao={livro.descricao}
            adicionarLivro={adicionarLivro} // Passando a função como prop
          />
        ))}
      </div>
    </div>
  )
}

const Home = ({ adicionarLivro }) => {
  const categorias = [...new Set(livrosData.map((livro) => livro.categoria))]
  const [livros, setLivros] = useState(livrosData)

  return (
    <main>
      <h1>Catálogo de Livros 📚</h1>
      {categorias.map((categoria) => (
        <SecaoLivros
          key={categoria}
          titulo={categoria}
          livros={livros.filter((livro) => livro.categoria === categoria)}
          adicionarLivro={adicionarLivro} // Passando a função como prop
        />
      ))}
    </main>
  )
}

export default Home
