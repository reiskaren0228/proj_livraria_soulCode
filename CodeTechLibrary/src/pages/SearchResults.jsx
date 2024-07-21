import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import CardLivro from "../components/CardLivro"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const SearchResults = ({ livros }) => {
  const query = useQuery()
  const searchTerm = query.get("query")
  const [results, setResults] = useState([])

  useEffect(() => {
    if (searchTerm) {
      // Filtrando livros recebidos via props
      const livrosFiltrados = livros.filter((livro) =>
        livro.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setResults(livrosFiltrados)
    }
  }, [searchTerm, livros])

  return (
    <div>
      <h1>Resultados da pesquisa para: {searchTerm}</h1>
      <div className="resultados-container">
        {results.length > 0 ? (
          results.map((result, index) => (
            <CardLivro
              key={index}
              imagem={result.imagem}
              titulo={result.titulo}
              autor={result.autor}
              data_da_publicacao={result.data_da_publicacao}
              editora={result.editora}
              descricao={result.descricao}
            />
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  )
}

export default SearchResults
