import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { cadastrarUsuario } from "../firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  async function cadastrar(data) {
    try {
      await cadastrarUsuario(data.nome, data.email, data.senha);
      toast.success(`Bem-vindo ao CodeTechLibrary, ${data.nome}! Por favor, verifique seu e-mail para confirmar o cadastro.`);
      navigate("/login"); // Redireciona para a página de login após o cadastro
    } catch (error) {
      toast.error("Um erro aconteceu! " + error.code);
    }
  }

  return (
    <main>
      <form className="form-section mt-5" onSubmit={handleSubmit(cadastrar)}>
        <h1>Cadastro</h1>
        <div>
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            placeholder="Digite seu nome completo"
            {...register("nome", { required: "O preenchimento do nome completo é obrigatório" })}
          />
          {errors.nome && (
            <small className="invalid">{errors.nome.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Digite seu email"
            {...register("email", { required: "O preenchimento do e-mail é obrigatório" })}
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
            placeholder="Digite sua senha"
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
          Cadastrar
        </Button>
      </form>
    </main>
  );
}

export default Cadastro;
