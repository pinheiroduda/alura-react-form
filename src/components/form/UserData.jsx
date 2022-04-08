import React from 'react'
import { TextField } from '@mui/material'

export function UserData() {
  return (
    <>
      <form>
        <TextField id="email" label="email" type="email"></TextField>
      </form>
    </>
  )
}
