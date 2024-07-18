import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import "../index.css";

function Cadastro() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  function cadastrar(data) {
    console.log("Cadastro");
    console.log(data);
    setSuccessMessage('Usuário cadastrado com sucesso!');
    reset();
  }

  return (
    <main>
      <form className="form-section mt-5" onSubmit={handleSubmit(cadastrar)}>
        <h1>Cadastro</h1>
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
        <div>
          <label htmlFor="fullName"><b>Nome Completo</b></label>
          <input
            type="text"
            id="fullName"
            className="form-control"
            placeholder="Digite seu nome completo"
            {...register("fullName", { required: "O preenchimento do nome completo é obrigatório" })}
          />
          {errors.fullName && (
            <small className="invalid">{errors.fullName.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="email"><b>Email</b></label>
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
          <label htmlFor="password"><b>Senha</b></label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Digite sua senha"
            {...register("password", {
              required: "A senha é obrigatória",
              minLength: { value: 6, message: "Mínimo de 6 caracteres" },
            })}
          />
          {errors.password && (
            <small className="invalid">{errors.password.message}</small>
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
