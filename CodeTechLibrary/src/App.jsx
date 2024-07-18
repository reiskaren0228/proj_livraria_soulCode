import Menu from "./components/Menu";
import Livros from "./pages/Livros";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          {/* <Route path="/contato" element={<Contato />} /> */}
          <Route path="/livros" element={<Livros />} />
          {/* <Route path="/tarefas/adicionar" element={<NovaTarefa />} />
          <Route path="/tarefas/editar/:id" element={<EditarTarefa />} /> */}
          {/* <Route path="/politicas" element={<Politicas />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* <Rodape /> */}
      </BrowserRouter>
    </>
  )
}

export default App;