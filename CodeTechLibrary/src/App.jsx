import Menu from "./components/Menu";
import Livros from "./pages/Livros";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Rodape from "./components/Rodape";
import Sobre from "./pages/Sobre";
import Contato from './pages/Contato';
import { UsuarioContext } from "./context/UsuarioContext";
import NovoLivro from "./pages/NovoLivro";
import { useEffect, useState } from "react"
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth"
import { Toaster } from "react-hot-toast"

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user);
      setLoading(false)
    })
  }, [])

  if(loading) {
    return null;
  }

  return (
    <>
      <UsuarioContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/livros" element={<Livros />} />
            <Route path="livros/adcionar" element={<NovoLivro />} />
            {/* <Route path="/tarefas/adicionar" element={<NovaTarefa />} />
          <Route path="/tarefas/editar/:id" element={<EditarTarefa />} /> */}
            <Route path="/sobre" element={<Sobre />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <Rodape />
        </BrowserRouter>
        <Toaster position="top-center" />
      </UsuarioContext.Provider>
    </>
  )
}

export default App;
