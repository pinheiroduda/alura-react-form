import React from 'react'
import { TextField, Button } from '@mui/material'

export function DeliveryData() {
  return (
    <>
      <form>
        <TextField
          id="cep"
          label="CEP"
          type="number"
          required
          margin="normal"
        />
        <TextField
          id="address"
          label="Endereço"
          type="text"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          id="number"
          label="Número"
          type="number"
          required
          margin="normal"
        />
        <TextField
          id="state"
          label="Estado"
          type="text"
          required
          margin="normal"
        />
        <TextField
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
