import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  height: 80px;
  padding: 0 30px;
  color: #fff;
  background: #00c1b4;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 170px;
  }

  div {
    display: flex;
    align-items: center;

    a {
      font-size: 22px;
      color: #fff;
      transition: color 0.2s;

      & + a {
        padding-left: 20px;
      }

      &:hover {
        color: ${darken(0.1, '#fff')};
      }
    }
  }
`;
