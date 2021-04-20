import { FC } from 'react'
import { Search } from '../../components'
import { HeaderContainer } from '..'
import { Home } from '../../pages'
import { Title } from './styles'

export const HomeContainer: FC = () => {
  return (
    <>
      <HeaderContainer>
        <Title>Choose Country</Title>
        <Search
          label="Search"
          inputName="search"
          error={false}
          errorMessage="No found"
        />
      </HeaderContainer>
      <Home />
    </>
  )
}
