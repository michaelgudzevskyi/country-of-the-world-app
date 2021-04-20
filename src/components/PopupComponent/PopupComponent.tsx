import { FC, ReactNode } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {
  PopupWrapper,
  PopupClose,
  PopupHeader,
  PopupTitle,
  PopupContent,
} from './styles'

interface PopupComponentProps {
  children: ReactNode
  open: boolean
  hide: () => void
}

export const PopupComponent: FC<PopupComponentProps> = ({
  children,
  open,
  hide,
}) => {
  return (
    <Popup
      modal
      open={open}
      closeOnDocumentClick={false}
      position="center center"
    >
      {(close: () => void) => (
        <PopupWrapper>
          <PopupHeader>
            <PopupTitle>Country Details</PopupTitle>
            <PopupClose
              onClick={() => {
                close()
                hide()
              }}
              aria-hidden="true"
            />
          </PopupHeader>

          <PopupContent>{children}</PopupContent>
        </PopupWrapper>
      )}
    </Popup>
  )
}
