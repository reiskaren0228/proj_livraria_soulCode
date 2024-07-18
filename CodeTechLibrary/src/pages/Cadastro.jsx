//import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import "../index.css";  


function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function cadastrar(data) {
    console.log("Cadastro");
    console.log(data);
  }

  function alterar(data) {
    console.log("Alterar");
    console.log(data);
  }

  return (
    <main>
      <form className="form-section mt-5" onSubmit={handleSubmit(cadastrar)}>
        <h1>Cadastro</h1>
        <div>
          <label htmlFor="fullName">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            className="form-control"
            {...register("fullName", { required: "O nome completo é obrigatório" })}
          />
          {errors.fullName && (
            <small className="invalid">{errors.fullName.message}</small>
          )}
        </div>
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
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            className="form-control"
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
        <Button
          variant="primary"
          className="mb-3 w-100"
          type="button"
          onClick={handleSubmit(alterar)}
        >
          Alterar
        </Button>
      </form>
    </main>
  );
}

export default Cadastro;
