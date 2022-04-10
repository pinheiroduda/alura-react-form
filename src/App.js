import { Container, Typography } from '@mui/material'

import { Form } from './components/form/Form'
import { RegisterValidations } from './context/RegisterValidations'
import { validateCPF, validatePassword } from './models/register'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" maxWidth="sm">
        Formulário de cadastro
      </Typography>
      <RegisterValidations.Provider
        value={{ cpf: validateCPF, password: validatePassword }}
      >
        <Form onSubmit={onSubmitForm} />
      </RegisterValidations.Provider>
    </Container>
  )
}

function onSubmitForm(data) {
  console.log(data)
}

export default App
