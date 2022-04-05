import React from 'react';

import { Button } from '@mui/material';

import { TextField } from '@mui/material';

export function Form() {
  return (
    <>
      <form>
        <TextField id='name' label='Nome' fullWidth/>
        <TextField id='lastname' label='Sobrenome' fullWidth/>
        <TextField id='cpf' label='CPF' fullWidth/>
        <label>Promoções</label>
        <input type='checkbox' />

        <Button
          type='submit'
          variant='contained'
        >
          Cadastrar
        </Button>
      </form>
    </>
  )
}