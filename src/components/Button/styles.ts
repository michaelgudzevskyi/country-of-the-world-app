import styled, { css } from 'styled-components';

interface ContainerProps {
  buttonStyle?: 'primary' | 'secundary';
}

export const Container = styled.button<ContainerProps>`
  height: 45px;
  border-radius: 100px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: all 0.3s;

  &:hover {
    filter: brightness(0.95);
  }

  ${(props) =>
    props.buttonStyle === 'primary' &&
    css`
      background: var(--grey-500);
      color: var(--white);
    `}

  ${(props) =>
    props.buttonStyle === 'secundary' &&
    css`
      background: var(--white);
      color: var(--black);
      box-shadow: 0px 3px 6px #00000029;
      font-family: 'Lato', sans-serif;
    `}
`;
