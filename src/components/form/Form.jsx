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
  const [cpf, setCpf] = useState('')
  const [sale, setSale] = useState(true)
  const [news, setNews] = useState(true)

  return (
    <>
      <Typography variant="h3" maxWidth="sm">
        Formulário de cadastro
      </Typography>
      <form
        onSubmit={event => {
          event.preventDefault()
        }}
      >
        <TextField
          value={name}
          onChange={event => {
            setName(event.target.value)
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
        <TextField
          value={cpf}
          onChange={event => {
            setCpf(event.target.value)
          }}
          id="cpf"
          label="CPF"
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              onChange={event => {
                setSale(event.target.checked)
              }}
              name="sale"
              defaultChecked={sale}
            />
          }
        />
        <FormControlLabel
          label="Novidades"
          control={
            <Switch
              onChange={event => {
                setNews(event.target.checked)
              }}
              name="news"
              defaultChecked={news}
            />
          }
        />
        <Button type="submit" variant="contained">
          Cadastrar
        </Button>
      </form>
    </>
  )
}
