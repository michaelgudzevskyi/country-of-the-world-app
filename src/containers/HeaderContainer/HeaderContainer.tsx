import { FC, ReactNode } from 'react'
import { Header } from './styles'

export const HeaderContainer: FC<ReactNode> = ({ children }) => {
  return <Header>{children}</Header>
}
