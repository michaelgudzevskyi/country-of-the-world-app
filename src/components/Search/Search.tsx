import { InputHTMLAttributes, useState } from 'react'

import { Container, InputErrorMessage } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  inputName: string
  error?: boolean
  errorMessage?: string
}

export function Search({
  label,
  error,
  errorMessage,
  inputName,
  ...rest
}: InputProps) {
  const [value, setValue] = useState('')

  return (
    <>
      <Container isErrored={!!error}>
        <input
          name={inputName}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="search"
          {...rest}
        />
        <label htmlFor="search" className="labelName">
          <span className="contentName">{label}</span>
        </label>
      </Container>
      {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </>
  )
}
