import React from 'react';

import { Button } from '@mui/material';

import { TextField } from '@mui/material';

export function Form() {
  return (
    <>
      <form>
        <TextField id='name' label='Nome' fullWidth margin='normal'/>
        <TextField id='lastname' label='Sobrenome' fullWidth margin='normal'/>
        <TextField id='cpf' label='CPF' fullWidth margin='normal'/>
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