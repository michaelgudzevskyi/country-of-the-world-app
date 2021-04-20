import { FC, ReactNode } from 'react'
import { Header, Container } from './styles'

export const HeaderContainer: FC<ReactNode> = ({ children }) => {
  return (
    <Header>
      <Container>{children}</Container>
    </Header>
  )
}
