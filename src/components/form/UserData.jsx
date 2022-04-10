import React, { useContext, useState } from 'react'
import { TextField, Button } from '@mui/material'
import { RegisterValidations } from '../../context/RegisterValidations'
import { UseErrors } from '../../hooks/useErrors'

export function UserData({ onSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const validations = useContext(RegisterValidations)
  const [error, validateFields, canSend] = UseErrors(validations)

  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault()
          if(canSend()) {
            onSubmit({ email, password })
          }
        }}
      >
        <TextField
          value={email}
          onChange={event => {
            setEmail(event.target.value)
          }}
          id="email"
          label="email"
          name="name"
          type="email"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          value={password}
          onChange={event => {
            setPassword(event.target.value)
          }}
          onBlur={validateFields}
          error={!error.password.valid}
          helperText={error.password.text}
          id="password"
          label="senha"
          name="password"
          type="password"
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained">
          Próximo
        </Button>
      </form>
    </>
  )
}
