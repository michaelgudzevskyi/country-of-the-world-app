import { InputHTMLAttributes } from 'react'
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
  value,
  errorMessage,
  inputName,
  onChange,
  ...rest
}: InputProps) {
  return (
    <>
      <Container isErrored={!!error}>
        <input
          name={inputName}
          value={value}
          onChange={onChange}
          id="search"
          required
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
