import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Body, Logo, Star } from './styles';
import logo from '../../assests/img/logo.png';

import { signOut } from '../../store/modules/auth/actions';

export default function Mensagem(props) {
  const dispatch = useDispatch();
  function handleSair() {
    dispatch(signOut());
  }
  const { mensagem, link } = props;
  return (
    <Container>
      <Body>
        <header>
          <Logo src={logo} alt="logo" />
        </header>
        <form>
          <h1>Dica como criar:</h1>
          <Star>
            <h3>{mensagem}</h3>
            <a href={link}>{link}</a>
          </Star>

          <button type="button" onClick={() => handleSair()}>
            Fechar
          </button>
        </form>
      </Body>
    </Container>
  );
}
