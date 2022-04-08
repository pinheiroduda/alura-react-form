import React, { useEffect, useState } from 'react'

import { DeliveryData } from './DeliveryData'
import { PersonalData } from './PersonalData'
import { UserData } from './UserData'

export function Form({ onSubmit, validateCPF }) {
  const [currentStage, setCurrentStage] = useState(0)
  const [collectedData, setCollectedData] = useState({})

  useEffect(() => {
    console.log(collectedData)
  })

  const forms = [
    <UserData onSubmit={getData} />,
    <PersonalData onSubmit={getData} validateCPF={validateCPF} />,
    <DeliveryData onSubmit={getData} />
  ]

  function getData(data) {
    setCollectedData({ ...collectedData, ...data })
    nextStage()
  }

  function nextStage() {
    setCurrentStage(currentStage + 1)
  }

  return <>{forms[currentStage]}</>
}
