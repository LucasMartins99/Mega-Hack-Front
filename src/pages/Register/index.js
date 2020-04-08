import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import logo from '../../assests/img/logo.png';
import { Container, Body, Logo } from './styles';
import { createUserRequest } from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Register() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  function onSubmit(data) {
    dispatch(createUserRequest(data));
    toast.success(
      'Empresa cadastrada com sucesso, faça o login para continuarmos'
    );
    history.push('/login');
  }
  return (
    <Container>
      <Body>
        <header>
          <Logo src={logo} alt="logo" />
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Passo 01</h1>
          <h3>Precisamos te conhecer um pouco antes de começar:</h3>
          <input placeholder="Nome da empresa" name="name" ref={register} />
          <input
            placeholder="DDD + Telefone da empresa"
            name="phone2"
            ref={register}
            type="number"
          />
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
          <select name="type" ref={register}>
            <option selected disabled value="">
              Escolha o tipo do seu negócio
            </option>
            <option value="Comércio">Comércio</option>
            <option value="Serviços">Serviços</option>
            <option value="Indústria">Indústria</option>
            <option value="Outros">Outros</option>
          </select>
          <select name="size" ref={register}>
            <option selected disabled value="">
              Escolha o tamanho do seu negócio
            </option>
            <option value="R$0 - R$81Mil">R$0 - R$81Mil</option>
            <option value="R$81Mil - R$360Mil">R$81Mil - R$360Mil</option>
            <option value="R$360Mil - R$4,8Milhões">
              R$360Mil - R$4,8Milhões
            </option>
            <option value="Maior que 4,8Milhões">Maior que 4,8Milhões</option>
          </select>
          <button type="submit">Cadastrar</button>
        </form>
      </Body>
    </Container>
  );
}
