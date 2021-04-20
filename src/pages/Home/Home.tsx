/* eslint-disable no-console */
import { FC, useEffect } from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { Creators as CountryCreators } from '../../store/ducks/countries'
import { CountryList } from '../../model/CountryList'

import { CountryCard } from '../../components'
import { Container, CardsWrapper, Title } from './styles'

export const Home: FC = () => {
  const { countryList } = useSelector(
    (state: RootStateOrAny) => state.countries
  )

  const dispatch = useDispatch()
  const { getCountryList } = CountryCreators

  useEffect(() => {
    dispatch(getCountryList())
  }, [getCountryList, dispatch])

  return (
    <Container>
      <Title>Choose Country</Title>
      <CardsWrapper>
        {countryList.map((country: CountryList) => (
          <CountryCard key={country.name} item={country} />
        ))}
      </CardsWrapper>
    </Container>
  )
}
