import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import logo from '../../assests/img/logo.png';
import { Container, Body, Logo } from './styles';
import { loginRequest } from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    const { user, password } = data;
    dispatch(loginRequest(user, password));
  }
  return (
    <Container>
      <Body>
        <header>
          <Logo src={logo} alt="logo" />
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>LOGIN</h1>
          <h3>Entre com seus dados para continuarmos a jornada:</h3>
          <input
            placeholder="Usuario ou e-mail pessoal"
            name="user"
            ref={register}
          />
          <input
            placeholder="Senha de acesso"
            name="password"
            type="password"
            ref={register}
          />

          <button type="submit">Entrar</button>
        </form>
      </Body>
    </Container>
  );
}
