import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 25px;
    }

    a {
      color: #000;
      display: block;
      margin-top: 25px;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#000')};
      }
    }
  }
`;

export const Button = styled.button`
  background: #00c1b4;
  height: 56px;
  border-radius: 10px;
  padding: 0 15px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 15px;
  transition: background-color 0.3s;
  border: 0;

  &:hover {
    background: ${shade(0.2, '#00c1b4')};
  }
`;
