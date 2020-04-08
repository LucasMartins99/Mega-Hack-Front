import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, Body, Info, Logo } from './styles';
import logo from '../../assests/img/logo.png';
import api from '../../services/api';
import ModalStar from '../../components/Modal/index';

export default function Desafio01() {
  const id = useSelector(state => state.user.profile.id_desafio);
  const [open, setOpen] = useState(false);
  const [ajuda, setAjuda] = useState(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {}, [open]);
  function openModal() {
    setOpen(true);
    setAjuda(true);
  }

  async function onSubmit(data) {
    const { email } = data;
    try {
      await api.put(`/challenges/${id}`, {
        email,
      });
      setOpen(true);
    } catch (err) {
      toast.error('Falha');
    }
  }
  return (
    <Container>
      <Body>
        <header>
          <Logo src={logo} alt="logo" />
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Passo 02</h1>
          <h2>Você possui um email comercial para o seu negócio ?</h2>
          {open && (
            <ModalStar
              blue
              red={false}
              importante="O email algo muito importante"
              nivel="1"
              ajuda={ajuda}
              mensagem="Se não tem, faça seu email neste link simples de usar e
              gratuito"
              link="https://support.google.com/mail/answer/56256?hl=pt-BR[["
            />
          )}
          <Info>
            <strong>Importante:</strong>
            <p>No futuro, você poderá ter um e-mail com um provedor especial</p>
          </Info>
          <input
            placeholder="Coloque aqui seu email comercial"
            name="email"
            ref={register}
          />
          <button type="submit">SIM</button>
          <button type="button" onClick={() => openModal()}>
            NÃO
          </button>
        </form>
      </Body>
    </Container>
  );
}
