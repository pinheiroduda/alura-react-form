import React, { useState, useContext } from 'react'

import { TextField, FormControlLabel, Switch, Button } from '@mui/material'

import { RegisterValidations } from '../../context/RegisterValidations'
import { UseErrors } from '../../hooks/useErrors'

export function PersonalData({ onSubmit }) {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [cpf, setCpf] = useState('')
  const [sale, setSale] = useState(true)
  const [news, setNews] = useState(true)
  const validations = useContext(RegisterValidations)
  const [error, validateFields, canSend] = UseErrors(validations)

  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault()
          if(canSend()) {
            onSubmit({ name, lastname, cpf, sale, news })
          }
        }}
      >
        <TextField
          value={name}
          onChange={event => {
            setName(event.target.value)
          }}
          id="name"
          label="Nome"
          name="name"
          required
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
          name="lastname"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          value={cpf}
          onChange={event => {
            setCpf(event.target.value)
          }}
          onBlur={validateFields}
          error={!error.cpf.valid}
          helperText={error.cpf.text}
          id="cpf"
          label="CPF"
          name="cpf"
          required
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          label="Promoções"
          name="sale"
          required
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
          name="news"
          required
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
          Próximo
        </Button>
      </form>
    </>
  )
}
