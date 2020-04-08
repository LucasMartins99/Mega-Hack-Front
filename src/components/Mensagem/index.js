import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Body, Info, Logo, Star, Img } from './styles';
import logo from '../../assests/img/logo.png';
import estrela from '../../assests/img/estrela.png';
import { signOut } from '../../store/modules/auth/actions';

export default function Mensagem(props) {
  const dispatch = useDispatch();
  function handleSair() {
    dispatch(signOut());
  }
  const { importante, nivel } = props;
  return (
    <Container>
      <Body>
        <header>
          <Logo src={logo} alt="logo" />
        </header>
        <form>
          <h1>Desafio {nivel}</h1>
          <h2>
            Estamos validando este desafio, em breve receberá um link para
            continuar
          </h2>
          <Star>
            <Img src={estrela} alt="estrela" />
            <h3>Você acaba de ganhar mais um estrela pixel</h3>
          </Star>

          <Info>
            <strong>Importante:</strong>
            <p>{importante}</p>
          </Info>
          <button type="button" onClick={() => handleSair()}>
            Sair
          </button>
        </form>
      </Body>
    </Container>
  );
}
