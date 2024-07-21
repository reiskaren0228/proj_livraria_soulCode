import { useState } from "react"
import CardLivro from "../components/CardLivro"
import "./Home.css"

const livrosData = [
  {
    imagem: "https://m.media-amazon.com/images/I/619FY8Lx4sL._SL1500_.jpg",
    titulo: "Guia Front-End",
    autor: "Diego Eis",
    data_da_publicacao: "2015",
    editora: "Casa do código",
    descricao: "O Caminho Para Ser Um Dev Front-End",
    categoria: "Front-end",
  },
  {
    imagem:
      "https://www.casadocodigo.com.br/cdn/shop/products/Sass_ebook_large.jpg?v=1631650381",
    titulo: "Sass",
    autor: "Natan Souza",
    data_da_publicacao: "2016",
    editora: "Alura",
    descricao: "Aprendendo pré-processadores CSS",
    categoria: "Front-end",
  },
  {
    imagem:
      "https://www.casadocodigo.com.br/cdn/shop/products/Back-EndJava_Amazon_large.jpg?v=1631747300",
    titulo: "Back-end Java",
    autor: "Eduardo Felipe Zambom Santana",
    data_da_publicacao: "2021",
    editora: "Alura",
    descricao: "Microsserviços, Spring Boot e Kubernetes",
    categoria: "Back-end",
  },
  {
    imagem:
      "https://media.geeksforgeeks.org/wp-content/uploads/20190819150913/head-first-java.jpg",
    titulo: "Head First Java 2e",
    autor: "Kathy Sierra, Bert Bates",
    data_da_publicacao: "2005",
    editora: "O′Reilly",
    descricao:
      "Melhor livro clássico e amigável para iniciantes para aprender Java",
    categoria: "Back-end",
  },
  {
    imagem:
      "https://www.casadocodigo.com.br/cdn/shop/products/cover_5f8d6e8d-ce76-4627-b14b-97ea92d59a76_large.jpg?v=1631668211",
    titulo: "DevOps na prática",
    autor: "Danilo Sato",
    data_da_publicacao: "2013",
    editora: "Editora 5",
    descricao: "entrega de software confiável e automatizada",
    categoria: "DevOps",
  },
  {
    imagem: "https://m.media-amazon.com/images/I/61uelQAJ1SL._SY425_.jpg",
    titulo: "Livro 6",
    autor: "Gene Kim, Jez Humble, John Willis, Patrick Debois",
    data_da_publicacao: "2018",
    editora: "Alta Books",
    descricao:
      "São apresentados os princípios da Manufatura Enxuta e das Três Maneiras: Fluxo, Feedback e Aprendizado Contínuo",
    categoria: "DevOps",
  },
  {
    imagem: "https://m.media-amazon.com/images/I/51PvMcvVqRL._SY445_SX342_.jpg",
    titulo: "Data Science Para Negócios ",
    autor: "Foster Provost, Tom Fawcett",
    data_da_publicacao: "2016",
    editora: "Alta Books",
    descricao: "Os princípios fundamentais do Data Science",
    categoria: "Data Science",
  },
  {
    imagem: "https://m.media-amazon.com/images/I/51sFm6lnXhL._SY445_SX342_.jpg",
    titulo: "Manual de Análise de Dados",
    autor: "Luiz Paulo Fávero, Patrícia Belfiore",
    data_da_publicacao: "2024",
    editora: "GEN LTC",
    descricao: "Manual de Análise de Dados",
    categoria: "Data Science",
  },
  {
    imagem:
      "https://www.casadocodigo.com.br/cdn/shop/products/HTML5eCSS3_ebook_large.jpg?v=1631720433",
    titulo: "Html e CSS",
    autor: "Lucas Mazza",
    data_da_publicacao: "2012",
    editora: "Alura",
    descricao: "Domine a web do futuro com esse livro",
    categoria: "Front-end",
  },
  {
    imagem: "https://m.media-amazon.com/images/I/71TFvlDRL3L._SY425_.jpg",
    titulo: "Introduction to C++",
    autor: "George S. Tselikis",
    data_da_publicacao: "2022",
    editora: "Taylor & Francis Ltd",
    descricao: "Primeiro livro a ensinar C++",
    categoria: "Back-end",
  },
  {
    imagem: "https://m.media-amazon.com/images/I/41D8F3RQ1AL._SY445_SX342_.jpg",
    titulo: "DevOps Para Leigos",
    autor: "Emily Freeman",
    data_da_publicacao: "2021",
    editora: "Alta Books",
    descricao:
      "Com o DevOps, podemos acelerar o ciclo de vida de entrega de software",
    categoria: "DevOps",
  },
  {
    imagem: "https://m.media-amazon.com/images/I/41Q3daD9FLL._SX342_SY445_.jpg",
    titulo: "Introduction to Data Science",
    autor: "B. Uma Maheswari, R. Sujatha",
    data_da_publicacao: "2021",
    editora: "Wiley",
    descricao: "Aborda todos os principais conceitos de Data Science",
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
