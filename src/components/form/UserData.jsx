import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'

export function UserData({ onSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault()
          onSubmit({ email, password })
        }}
      >
        <TextField
          value={email}
          onChange={event => {
            setEmail(event.target.value)
          }}
          id="email"
          label="email"
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
          id="password"
          label="senha"
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
