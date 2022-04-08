import React, { useState } from 'react'

import { Typography } from '@mui/material'

import { DeliveryData } from './DeliveryData'
import { PersonalData } from './PersonalData'
import { UserData } from './UserData'

export function Form({ onSubmit, validateCPF }) {
  const [currentStage, setCurrentStage] = useState(0)
  return <>{CurrentForm(currentStage)}</>
}

function CurrentForm(stage) {
  switch (stage) {
    case 0:
      return <UserData />
    case 1:
      return <PersonalData />
    case 2:
      return <DeliveryData />
    default:
      return <Typography>Erro ao selecionar formilário</Typography>
  }
}
