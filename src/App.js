import { Form } from './components/form/Form'

import { Container } from '@mui/material'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Form />
    </Container>
  )
}

function onSubmitForm(data) {
  console.log(data)
}

function validateCPF(cpf) {
  if (cpf.length !== 11) {
    return {
      valid: false,
      text: 'O campo CPF deve ter 11 dígitos'
    }
  } else {
    return {
      valid: true,
      text: ''
    }
  }
}

export default App
