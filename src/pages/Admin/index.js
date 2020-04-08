import React, { useEffect, useState } from 'react';

import { MdDone, MdClose, MdThumbUp } from 'react-icons/md';
import { Container, List } from './styles';
import api from '../../services/api';
import history from '../../services/history';

export default function Admin() {
  const [itens, setItens] = useState([]);
  async function handleAceito(id) {
    const status = true;
    const aprovado = true;
    try {
      await api.put(`/approvals/${id}`, {
        status,
        aprovado,
      });
      history.push('/admin');
    } catch (err) {
      console.log('Falha Porra');
    }
  }
  function handleRecusado() {}
  useEffect(() => {
    async function loadItens() {
      const response = await api.get('/approvals');
      setItens(response.data);
    }
    loadItens();
  }, []);
  return (
    <Container>
      <List>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Email</th>
            <th>CNPJ</th>
            <th>Facebook</th>
            <th>Instagram</th>
            <th>Linkedin</th>
            <th>PicPay</th>
            <th>Verificar</th>
            <th>Status</th>
            <th>Aprovado</th>
            <th>Escolha</th>
          </tr>
        </thead>
        <tbody>
          {itens.map(item => (
            <tr>
              <td>{item.Challenge.empresa}</td>
              <td>{item.Challenge.email}</td>
              <td>{item.Challenge.cnpj}</td>
              <td>{item.Challenge.facebook}</td>
              <td>{item.Challenge.instagram}</td>
              <td>{item.Challenge.linkedin}</td>
              <td>{item.Challenge.picpay}</td>
              <td>{item.type}</td>
              <td>{item.status ? 'Realizado' : 'Pendente'}</td>
              <td>{item.aprovado}</td>
              <td>
                <div>
                  {item.status ? (
                    <button disabled type="submit">
                      <MdThumbUp size={30} color="#000" />
                    </button>
                  ) : (
                    <button type="submit" onClick={() => handleAceito(item.id)}>
                      <MdDone size={30} color="#000" />
                    </button>
                  )}
                  {item.status ? (
                    <span />
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleRecusado(item.id)}
                    >
                      <MdClose size={30} color="#000" />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </List>
    </Container>
  );
}
