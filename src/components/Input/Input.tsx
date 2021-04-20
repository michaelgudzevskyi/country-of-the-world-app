import React, { InputHTMLAttributes, LegacyRef, useState } from 'react'

import { Container, InputErrorMessage } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  inputName: string
  error?: boolean
  errorMessage?: string
  inputRef?: LegacyRef<HTMLInputElement> | undefined
}

function Input({
  label,
  error,
  errorMessage,
  inputName,
  inputRef,
  ...rest
}: InputProps) {
  const [value, setValue] = useState('')

  return (
    <>
      <Container isErrored={!!error} data-testid="input-container">
        <input
          name={inputName}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="email"
          ref={inputRef}
          {...rest}
        />
        <label htmlFor="email" className="labelName">
          <span className="contentName">{label}</span>
        </label>
      </Container>
      {errorMessage && (
        <InputErrorMessage data-testid="input-error-message">
          {errorMessage}
        </InputErrorMessage>
      )}
    </>
  )
}

export default Input
