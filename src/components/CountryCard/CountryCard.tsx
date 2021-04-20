import { FC } from 'react'
import { CountryList } from '../../model/CountryList'
import { CardContainer, CardImage, CardTitle } from './styles'

interface Props {
  item: CountryList
}

export const CountryCard: FC<Props> = ({ item }) => {
  return (
    <CardContainer>
      <CardImage src={item.flag} alt="Country Flag" />
      <CardTitle>{item.name}</CardTitle>
    </CardContainer>
  )
}
