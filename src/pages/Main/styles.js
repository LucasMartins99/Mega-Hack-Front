import styled from 'styled-components';
import { darken } from 'polished';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10 10px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 180px;
  background: green;
  p {
    ${media.lessThan('small')`
    font-size: 30px;`}
    color: #fff;
    font-size: 44px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  ${media.lessThan('small')`
  width: 80%;
  `}
  width: 40%;
  background: #fff;
  h1 {
    font-weight: bold;
    text-align: center;
  }
  p {
    ${media.lessThan('small')`
      font-size: 18px;
    `}
    font-size: 25px;
    text-align: center;
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
  div {
    padding-top: 10px;
    button {
      background: blue;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Logo = styled.img`
  ${media.lessThan('small')`
    width: 270px;
    height: 60px;
`}
`;
