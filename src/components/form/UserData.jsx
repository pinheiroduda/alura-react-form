import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'

export function UserData({ onSubmit, validations }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ password: { valid: true, text: '' } })

  function validateFields(event) {
    const {name, value} = event.target
    const newState = {...error}
    newState[name] = validations[name](value)
    setError(newState)    
  }

  function canSend() {
    for (let field in error) {
      if(!error[field].valid){
        return false
      }
    }
    return true
  }

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
          Cadastrar
        </Button>
      </form>
    </>
  )
}
