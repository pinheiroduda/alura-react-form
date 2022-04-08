import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'

export function DeliveryData(onSubmit) {
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault()
          onSubmit({ cep, address, number, state, city })
        }}
      >
        <TextField
          value={cep}
          onChange={event => {
            setCep(event.target.value)
          }}
          id="cep"
          label="CEP"
          type="number"
          required
          margin="normal"
        />
        <TextField
          value={address}
          onChange={event => {
            setAddress(event.target.value)
          }}
          id="address"
          label="Endereço"
          type="text"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          value={number}
          onChange={event => {
            setNumber(event.target.value)
          }}
          id="number"
          label="Número"
          type="number"
          required
          margin="normal"
        />
        <TextField
          value={state}
          onChange={event => {
            setState(event.target.value)
          }}
          id="state"
          label="Estado"
          type="text"
          required
          margin="normal"
        />
        <TextField
          value={city}
          onChange={event => {
            setCity(event.target.value)
          }}
          id="city"
          label="Cidade"
          type="text"
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" fullWidth>
          Finalizar cadastro
        </Button>
      </form>
    </>
  )
}
