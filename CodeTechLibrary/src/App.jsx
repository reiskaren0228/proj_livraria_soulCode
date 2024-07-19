import Menu from "./components/Menu"
import Livros from "./pages/Livros"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Rodape from "./components/Rodape"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import { UsuarioContext } from "./context/UsuarioContext"
import NovoLivro from "./pages/NovoLivro"
import { useEffect, useState } from "react"
import { auth } from "./firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import { Toaster } from "react-hot-toast"

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null)
  const [loading, setLoading] = useState(true)
  const [livros, setLivros] = useState([]) // Adicionando estado para os livros

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user)
      setLoading(false)
    })
  }, [])

  const adicionarLivro = (novoLivro) => {
    setLivros([...livros, novoLivro])
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
            <Route path="livros/adcionar" element={<NovoLivro />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
          <Rodape />
        </BrowserRouter>
        <Toaster position="top-center" />
      </UsuarioContext.Provider>
    </>
  )
}

export default App
