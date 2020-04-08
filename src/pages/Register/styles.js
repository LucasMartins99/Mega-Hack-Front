import styled from 'styled-components';
import { darken } from 'polished';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10 10px;
  ${media.lessThan('small')`
  padding-top: 10px;
  `}
  padding-top: 50px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  ${media.lessThan('small')`
  width: 90%;
  `}
  width: 40%;
  background: #fff;
  h1 {
    font-weight: bold;
    text-align: initial;
  }
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${media.lessThan('small')`
      height: 70px;
    `}
    height: 100px;
    background: green;
  }
  form {
    display: flex;
    flex-direction: column;
    align-self: center;
    background: #82cce8;
    padding: 15px 15px;
    h1 {
      color: #fff;
    }
    h3 {
      color: #fff;
    }
    input {
      border: 1;
      border-style: solid;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      margin: 0 0 10px;
      font-size: 15px;
    }
    select {
      border: 1;
      border-style: solid;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      margin: 0 0 10px;
      font-size: 15px;
    }

    button {
      margin: 5px 5px;
      padding: 8px 15px;
      height: 44px;
      background: green;
      font-weight: bold;
      border: 0;
      color: #fff;
      ${media.lessThan('small')`
      font-size: 18px;
    `}
      font-size: 25px;
      border-radius: 8px;
      transition: background 0.2;
      &:hover {
        background: ${darken(0.04, 'green')};
      }
    }
  }
`;
export const Logo = styled.img`
  ${media.lessThan('small')`
    width: 100%;
    height: 60px;
`}
  width:100%;
`;
