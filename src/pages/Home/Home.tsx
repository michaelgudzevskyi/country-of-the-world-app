/* eslint-disable no-console */
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { Creators as CountryCreators } from '../../store/ducks/countries'
import { CountryList } from '../../model/CountryList'
import { CountryCard, PopupComponent } from '../../components'
import { Container, CardsWrapper, Title } from './styles'

export const Home: FC = () => {
  const [open, setOpen] = useState(false)
  const [singleCountry, setSingleCountry] = useState<CountryList | null>()
  const { countryList } = useSelector(
    (state: RootStateOrAny) => state.countries
  )

  const dispatch = useDispatch()
  const { getCountryList } = CountryCreators

  useEffect(() => {
    dispatch(getCountryList())
  }, [getCountryList, dispatch])

  const handlePopup = (country: CountryList | null, event: boolean) => {
    console.log('country: ', country)
    setSingleCountry(country)
    setOpen(event)
  }

  return (
    <Container>
      <Title>Click to see countrys details</Title>
      <CardsWrapper>
        {countryList &&
          countryList?.map((country: CountryList) => (
            <CountryCard
              handlePopup={() => handlePopup(country, true)}
              key={country.name}
              item={country}
            />
          ))}
      </CardsWrapper>

      <PopupComponent open={open} hide={() => handlePopup(null, false)}>
        {JSON.stringify(singleCountry)}
      </PopupComponent>
    </Container>
  )
}
