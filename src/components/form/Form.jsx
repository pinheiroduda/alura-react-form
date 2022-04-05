import React from 'react'

import {
  Typography,
  TextField,
  FormControlLabel,
  Switch,
  Button
} from '@mui/material'

import '@fontsource/roboto/400.css'

export function Form() {
  return (
    <>
      <Typography variant="h3" maxWidth="sm">
        Formulário de cadastro
      </Typography>
      <form>
        <TextField id="name" label="Nome" fullWidth margin="normal" />
        <TextField id="lastname" label="Sobrenome" fullWidth margin="normal" />
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
