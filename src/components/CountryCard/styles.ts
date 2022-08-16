import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  width: 100%;
  max-width: calc(33.33% - 40px);
  min-width: 200px;
  border-radius: 5px;
  height: 68px;
  padding: 20px;
  margin: 20px;
  overflow: hidden;
  @media only screen and (max-width: 762px) {
    max-width: calc(50% - 40px);
  }
  @media only screen and (max-width: 490px) {
    max-width: calc(100% - 40px);
  }
  &:after {
    content: '»';
    position: absolute;
    color: var(--main);
    opacity: 0;
    top: 18px;
    right: 5px;
    transition: opacity 0.2s, right 0.3s;
    font-size: 22px;
  }
  &:hover:after {
    opacity: 1;
    right: 18px;
  }
  &:hover {
    border: 1px solid gainsboro;
  }
`

export const CardImage = styled.img`
  width: 42px;
`
export const CardTitle = styled.span`
  color: var(--main);
  font-size: 15px;
  margin: 0 0 0 20px;
`
