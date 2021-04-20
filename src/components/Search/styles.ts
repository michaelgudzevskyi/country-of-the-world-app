import styled, { css } from 'styled-components'

interface ContainerProps {
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  height: 44px;
  overflow: hidden;

  input {
    width: 100%;
    height: 100%;
    color: var(--black);
    padding: 20px 0 8px 20px;
    border-radius: 5px;
    border: none;
    outline: none;

    ${(props) =>
      props.isErrored &&
      css`
        color: var(--red);
      `}

    &:focus + .labelName .contentName,
    &:not([value='']) + .labelName .contentName {
      transform: translateY(-150%);
      font-size: 10px;
      bottom: 9px;
      ${(props) =>
        props.isErrored &&
        css`
          color: var(--red);
        `}
    }

    &:valid + .labelName .contentName,
    &:not([value='']) + .labelName .contentName {
      transform: translateY(-150%);
      font-size: 10px;
      bottom: 9px;
      ${(props) =>
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

    ${(props) =>
      props.isErrored &&
      css`
        border-bottom: 1px solid var(--red);
      `}
  }

  .contentName {
    font-size: 13px;
    position: absolute;
    bottom: 14px;
    left: 8px;
    transition: all 0.2s ease;

    ${(props) =>
      props.isErrored &&
      css`
        color: var(--red);
      `}
  }
`

export const InputErrorMessage = styled.p`
  color: var(--red);
  font-size: 12px;
  padding: 2px;
  position: absolute;
  color: white;
`
