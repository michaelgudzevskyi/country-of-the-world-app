import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  height: 62px;
  overflow: hidden;

  input {
    width: 100%;
    height: 100%;
    color: var(--black);
    padding: 30px 0 2px 20px;
    border: none;
    outline: none;

    ${props =>
      props.isErrored &&
      css`
        color: var(--red);
      `}

    &:focus + .labelName .contentName,
    &:not([value='']) + .labelName .contentName {
      transform: translateY(-150%);

      ${props =>
        props.isErrored &&
        css`
          color: var(--red);
        `}
    }

    &:focus + .labelName::after &:not([value='']) + .labelName::after {
      transform: translateX(-0%);
    }
  }

  label {
    position: absolute;
    bottom: 0px;
    left: 0%;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid var(--grey-500);
    color: var(--grey-500);

    ${props =>
      props.isErrored &&
      css`
        border-bottom: 1px solid var(--red);
      `}
  }

  .contentName {
    font-size: 12px;

    position: absolute;
    bottom: 10px;
    left: 0px;
    transition: all 0.3s ease;

    ${props =>
      props.isErrored &&
      css`
        color: var(--red);
      `}
  }
`;

export const InputErrorMessage = styled.p`
  color: var(--red);
  font-size: 12px;
  padding: 2px;
`;
