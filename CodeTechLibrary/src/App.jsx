import Menu from "./components/Menu";
import Livros from "./pages/Livros";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <>
      <Menu />
      <Livros />
      <Login />
      <Cadastro />
      <menubar />
    </>
  );
}

export default App;