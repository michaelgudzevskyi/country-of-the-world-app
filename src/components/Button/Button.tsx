import React, { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  buttonStyle?: 'primary' | 'secundary'
}

function Button({
  children,
  loading,
  buttonStyle = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <Container buttonStyle={buttonStyle} {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  )
}

export default Button
