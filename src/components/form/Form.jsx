import React from 'react'
import { DeliveryData } from './DeliveryData'

import { PersonalData } from './PersonalData'
import { UserData } from './UserData'

export function Form({ onSubmit, validateCPF }) {
  return (
    <>
      <PersonalData onSubmit={onSubmit} validateCPF={validateCPF} />
      <UserData />
      <DeliveryData />
    </>
  )
}
