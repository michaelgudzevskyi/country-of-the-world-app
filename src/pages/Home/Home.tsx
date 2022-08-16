/* eslint-disable no-nested-ternary */
import { FC, useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { Creators as CountryCreators } from '../../store/ducks/countries'
import { CountryList } from '../../model/CountryList'
import { CountryCard, CountryData, PopupComponent } from '../../components'
import { Container, CardsWrapper, Title } from './styles'

export const Home: FC = () => {
  const [open, setOpen] = useState(false)
  const [singleCountry, setSingleCountry] = useState<CountryList | null>()
  const dispatch = useDispatch()
  const { getCountryList } = CountryCreators
  const { countryList, loading } = useSelector(
    (state: RootStateOrAny) => state.countries
  )

  useEffect(() => {
    dispatch(getCountryList())
  }, [getCountryList, dispatch])

  const handlePopup = useCallback(
    (country: CountryList | null, event: boolean) => {
      setSingleCountry(country)
      setOpen(event)
    },
    []
  )
  
  return (
    <Container>
      <Title>
        {loading
          ? 'Loading...'
          : countryList
          ? 'Click to see countrys details'
          : 'Country not found.'}
      </Title>
      <CardsWrapper>
        {countryList &&
          countryList?.map((country: CountryList) => (
            <CountryCard
              handlePopup={() => handlePopup(country, true)}
              key={country.flag}
              item={country}
            />
          ))}
      </CardsWrapper>

      <PopupComponent open={open} hide={() => handlePopup(null, false)}>
        <CountryData selectedCountry={singleCountry} />
      </PopupComponent>
    </Container>
  )
}
