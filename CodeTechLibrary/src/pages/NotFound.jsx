import notFound from "../assets/notFound.png"

function NotFound() {
  return (
    <main>
      <h1>Página não encontrada!</h1>
      <div className="notfound">
        <img
          src={notFound}
          alt="Imagem de um livro chorando"
          className="img-notfound"
        />
      </div>
      <p className="paragrafo-notfound">Error 404!</p>
    </main>
  )
}

export default NotFound;