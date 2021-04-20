import { FC } from 'react'
import { CountryList } from '../../model/CountryList'
import { CardContainer, CardImage, CardTitle } from './styles'

interface Props {
  item: CountryList
  handlePopup: () => void
}

export const CountryCard: FC<Props> = ({ item, handlePopup }) => {
  return (
    <CardContainer onClick={handlePopup}>
      <CardImage src={item.flag} alt="Country Flag" />
      <CardTitle>{item.name}</CardTitle>
    </CardContainer>
  )
}
