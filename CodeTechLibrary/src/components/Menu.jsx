import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "./Menu.css"
import UsuarioContext from "../context/UsuarioContext"
import { logout } from "../firebase/auth"
import logo from "../assets/logo_2.png"

function Menu() {
  const usuario = useContext(UsuarioContext)
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  function handleLogout() {
    logout().then(() => {
      navigate("/login")
    })
  }

  function handleSearch(e) {
    e.preventDefault()
    navigate(`/search?query=${searchTerm}`)
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="Imagem da logo" width="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
            {usuario ? (
              <>
                <Link className="nav-link" to="/sobre">
                  Sobre nós
                </Link>
                <Link className="nav-link" to="/livros">
                  Livros
                </Link>
                <Link className="nav-link" to="/contato">
                  Contato
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/cadastro">
                  Cadastro
                </Link>
                <Link className="nav-link" to="/contato">
                  Contato
                </Link>
              </>
            )}
            {usuario && (
              <>
                <span className="text-dark nav-link">
                  {usuario.displayName}
                </span>
                <Button variant="outline-dark" onClick={handleLogout}>
                  Sair
                </Button>
              </>
            )}
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Busca livros adicionados"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-dark" type="submit">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
