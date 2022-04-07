import React, { useState } from 'react'

import {
  Typography,
  TextField,
  FormControlLabel,
  Switch,
  Button
} from '@mui/material'

import '@fontsource/roboto/400.css'

export function Form() {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')

  return (
    <>
      <Typography variant="h3" maxWidth="sm">
        Formulário de cadastro
      </Typography>
      <form
        onSubmit={event => {
          event.preventDefault()
          console.log(name, lastname)
        }}
      >
        <TextField
          value={name}
          onChange={event => {
            let temporaryName = event.target.value
            if (temporaryName.length > 4) {
              temporaryName = temporaryName(name.substring(0, 3))
            }
            setName(temporaryName)
          }}
          id="name"
          label="Nome"
          fullWidth
          margin="normal"
        />
        <TextField
          value={lastname}
          onChange={event => {
            setLastname(event.target.value)
          }}
          id="lastname"
          label="Sobrenome"
          fullWidth
          margin="normal"
        />
        <TextField id="cpf" label="CPF" fullWidth margin="normal" />
        <FormControlLabel
          label="Promoções"
          control={<Switch name="sale" defaultChecked />}
        />
        <FormControlLabel
          label="Novidades"
          control={<Switch name="news" defaultChecked />}
        />
        <Button type="submit" variant="contained">
          Cadastrar
        </Button>
      </form>
    </>
  )
}
