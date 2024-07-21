import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { Toaster } from "react-hot-toast"

import Menu from "./components/Menu"
import Livros from "./pages/Livros"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import Rodape from "./components/Rodape"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import EditarLivro from "./pages/EditarLivro"
import UsuarioContext from "./context/UsuarioContext"

import { auth } from "./firebase/config.js"
import { createLivro, readLivros, updateLivro, getLivrosUsuario } from "./firebase/livros"
import SearchResults from "./pages/SearchResults.jsx"

const App = () => {
  const [usuarioLogado, setUsuarioLogado] = useState(null)
  const [loading, setLoading] = useState(true)
  const [livros, setLivros] = useState([])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user)
      setLoading(false)
    })

    const carregarLivros = async () => {
      const livrosCarregados = await readLivros()
      setLivros(livrosCarregados)
    }

    carregarLivros()
  }, [])

  const adicionarLivro = async (novoLivro) => {
    if (usuarioLogado) {
      await createLivro(novoLivro, usuarioLogado.uid)
      const livrosAtualizados = await getLivrosUsuario(usuarioLogado.uid)
      setLivros(livrosAtualizados)
    }
  }


  const atualizarLivro = async (id, livroAtualizado) => {
    await updateLivro(id, livroAtualizado)
    const livrosAtualizados = await readLivros()
    setLivros(livrosAtualizados)
  }

  if (loading) {
    return null
  }

  return (
    <>
      <UsuarioContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route
              path="/"
              element={<Home adicionarLivro={adicionarLivro} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/livros" element={<Livros livros={livros} />} />
            <Route
              path="/editar-livro/:id"
              element={<EditarLivro atualizarLivro={atualizarLivro} />}
            />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/search" element={<SearchResults livros={livros} />} />
          </Routes>
          <Rodape />
        </BrowserRouter>
        <Toaster position="top-center" />
      </UsuarioContext.Provider>
    </>
  )
}

export default App
