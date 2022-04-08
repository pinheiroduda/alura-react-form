import React from 'react'
import { TextField, Button } from '@mui/material'

export function UserData({ onSubmit }) {
  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault()
          onSubmit()
        }}
      >
        <TextField
          id="email"
          label="email"
          type="email"
          fullWidth
          margin="normal"
        />
        <TextField
          id="password"
          label="senha"
          type="password"
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
