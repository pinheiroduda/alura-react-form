import React, { useState } from 'react'

import { TextField, FormControlLabel, Switch, Button } from '@mui/material'

import '@fontsource/roboto/400.css'

export function PersonalData({ onSubmit, validateCPF }) {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [cpf, setCpf] = useState('')
  const [sale, setSale] = useState(true)
  const [news, setNews] = useState(true)
  const [error, setError] = useState({ cpf: { valid: true, text: '' } })

  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault()
          onSubmit({ name, lastname, cpf, sale, news })
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
          onBlur={event => {
            const isValid = validateCPF(cpf)
            setError({
              cpf: isValid
            })
          }}
          error={!error.cpf.valid}
          helperText={error.cpf.text}
          id="cpf"
          label="CPF"
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              checked={sale}
              onChange={event => {
                setSale(event.target.checked)
              }}
              name="sale"
            />
          }
        />
        <FormControlLabel
          label="Novidades"
          control={
            <Switch
              checked={news}
              onChange={event => {
                setNews(event.target.checked)
              }}
              name="news"
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
