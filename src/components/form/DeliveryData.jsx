import React from 'react'
import { TextField, Button } from '@mui/material'

export function DeliveryData() {
  return (
    <>
      <form>
        <TextField id="cep" label="CEP" type="number" margin="normal" />
        <TextField
          id="address"
          label="Endereço"
          type="text"
          fullWidth
          margin="normal"
        />
        <TextField id="number" label="Número" type="number" margin="normal" />
        <TextField id="state" label="Estado" type="text" margin="normal" />
        <TextField id="city" label="Cidade" type="text" margin="normal" />
        <Button type="submit" variant="contained" fullWidth>
          Finalizar cadastro
        </Button>
      </form>
    </>
  )
}
