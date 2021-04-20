import { FC, ChangeEvent } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { Creators as CountryCreators } from '../../store/ducks/countries'
import { Search } from '../../components'
import { HeaderContainer } from '..'
import { Home } from '../../pages'
import { Title } from './styles'

export const HomeContainer: FC = () => {
  const { error } = useSelector((state: RootStateOrAny) => state.countries)
  const dispatch = useDispatch()
  const { getCountryFilter } = CountryCreators

  const handleField = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getCountryFilter(e.target.value))
  }

  return (
    <>
      <HeaderContainer>
        <Title>Choose Country</Title>
        <Search
          label="Search"
          inputName="search"
          error={error}
          onChange={handleField}
          errorMessage={error}
        />
      </HeaderContainer>
      <Home />
    </>
  )
}
