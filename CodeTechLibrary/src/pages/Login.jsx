import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import { entrarGoogle, loginUsuario } from "../firebase/auth"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  async function entrar(data) {
    try {
      await loginUsuario(data.email, data.senha)
      toast.success("Bem-vindo ao CodeTechLibrary! 📘")
      navigate("/")
    } catch (error) {
      if (error.message === "email-verification-required") {
        toast.error("Por favor, verifique seu e-mail antes de fazer login.")
      } else {
        toast.error("Email e/ou Senha incorreta!")
      }
    }
  }

  async function handleEntrarGoogle() {
    try {
      await entrarGoogle()
      toast.success("Bem-vindo ao CodeTechLibrary! 📘")
      navigate("/")
    } catch (error) {
      toast.error("Um erro aconteceu! " + error.message)
    }
  }

  return (
    <main>
      <form className="form-section mt-5" onSubmit={handleSubmit(entrar)}>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email", { required: "O email é obrigatório" })}
          />
          {errors.email && (
            <small className="invalid">{errors.email.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            className="form-control"
            {...register("senha", {
              required: "A senha é obrigatória",
              minLength: { value: 6, message: "Mínimo de 6 caracteres" },
            })}
          />
          {errors.senha && (
            <small className="invalid">{errors.senha.message}</small>
          )}
        </div>
        <Button variant="dark" className="mt-2 mb-2 w-100" type="submit">
          Entrar
        </Button>
        <Button
          variant="primary"
          className="mb-3 w-100"
          type="button"
          onClick={handleEntrarGoogle}
        >
          Entrar com o google
        </Button>
        <div className="icon-container">
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
        <div className="link-cadastro">
          <p>Não tem uma conta?</p>
          <Link className="btn btn-dark" to="/cadastro">
            Cadastre-se{" "}
          </Link>
        </div>
      </form>
    </main>
  )
}

export default Login
