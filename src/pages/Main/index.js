import React from 'react';

import { Container, Header, Body, Logo } from './styles';
import logo from '../../assests/img/logo.png';
import history from '../../services/history';

export default function Main() {
  function handleRegister() {
    history.push('/register');
  }
  function handleLogin() {
    history.push('/login');
  }
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Body>
        <h1>DIGITALIZANDO NEGÓCIOS REAIS</h1>
        <p>
          Nosso propósito é alcançar negócios que não vendem seus pordutos ou
          serviços ainda na internet. Se você é um desses negócios, você chegou
          no lugar certo. Seja muito bem-vindo!
        </p>
        <p>
          Esta são os primeiros passos para que você mostrar seu negócio
          digitalmente. Vem para esta caminhada conosco...
        </p>
        <p>
          Ao somar 5 estrelas, você terá direito a uma consultoria de marketing
          digital para aprimorar ainda mais o seu negócios!
        </p>
        <button type="submit" onClick={() => handleRegister()}>
          QUERO SABER MAIS
        </button>
        <div>
          <button type="submit" onClick={() => handleLogin()}>
            CONTINUAR JORNADA
          </button>
        </div>
      </Body>
    </Container>
  );
}
