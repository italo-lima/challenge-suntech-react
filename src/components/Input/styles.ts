import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f1f1f1;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid #706c61;
  color: #666360;

  & + div {
    margin-top: 10px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #00c1b4;
      border-color: #00c1b4;
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: #00c1b4;
      color: #00c1b4;
    `}


  input {
    color: #000;
    flex: 1;
    border: 0;
    background: transparent;

    &::placeholder {
      color: #000;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.p`
  padding: 5px;
  font-size: 14px;
  color: #c53030;
`;
