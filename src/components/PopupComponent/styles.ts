import styled from 'styled-components'

export const PopupWrapper = styled.div`
  position: relative;
  padding: 15px 25px 25px;
  min-width: 600px;
  max-width: 600px;

  @media only screen and (max-width: 674px) {
    min-width: auto;
    width: 100%;
  }
`
export const PopupHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #0f0f0f;
  height: 40px;
  font-size: 20px;
  line-height: 21px;
  border-bottom: 1px solid #dadada;
`

export const PopupTitle = styled.span`
  color: var(--main);
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 900;
`

export const PopupClose = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  right: -23px;
  top: -12px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 2px;
    height: 16px;
    background-color: var(--main);
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`

export const PopupContent = styled.div``
