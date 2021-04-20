import styled from 'styled-components'

interface ContainerProps {
  buttonStyle?: 'primary' | 'secundary'
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
`
export const Title = styled.h3`
  text-align: center;
  color: #fafafb;
  font-size: 28px;
  margin: 0 0 13px;
`
