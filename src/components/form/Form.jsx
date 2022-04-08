import React, { useState } from 'react'

import { DeliveryData } from './DeliveryData'
import { PersonalData } from './PersonalData'
import { UserData } from './UserData'

export function Form({ onSubmit, validateCPF }) {
  const [currentStage, setCurrentStage] = useState(0)

  const forms = [
    <UserData onSubmit={nextStage} />,
    <PersonalData onSubmit={nextStage} validateCPF={validateCPF} />,
    <DeliveryData />
  ]

  function nextStage() {
    setCurrentStage(currentStage + 1)
  }

  return <>{forms[currentStage]}</>
}
