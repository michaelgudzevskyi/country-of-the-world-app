import { FC } from 'react'
import { CountryList } from '../../model/CountryList'
import {
  ContainerData,
  ContainerRow,
  ContainerStrong,
  ContainerWrapper,
  ContainerLeft,
  Image,
} from './styles'

interface CountryDataProps {
  selectedCountry?: CountryList | null
}

export const CountryData: FC<CountryDataProps> = ({ selectedCountry }) => {
  return (
    <ContainerWrapper>
      <ContainerData>
        <ContainerRow>
          <ContainerStrong>Region:</ContainerStrong>{' '}
          <span>{selectedCountry?.region}</span>
        </ContainerRow>
        <ContainerRow>
          <ContainerStrong>Capital:</ContainerStrong>{' '}
          <span>{selectedCountry?.capital}</span>
        </ContainerRow>
        <ContainerRow>
          <ContainerStrong>Code:</ContainerStrong>{' '}
          <span>{selectedCountry?.alpha2Code}</span>
        </ContainerRow>
        <ContainerRow>
          <ContainerStrong>Population:</ContainerStrong>{' '}
          <span>{selectedCountry?.population}</span>
        </ContainerRow>
      </ContainerData>

      <ContainerLeft>
        <Image src={selectedCountry?.flag} alt="Country Flag" />
      </ContainerLeft>
    </ContainerWrapper>
  )
}
