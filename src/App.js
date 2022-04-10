import { Container, Typography } from '@mui/material'

import { Form } from './components/form/Form'
import { validateCPF, validatePassword } from './models/register'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" maxWidth="sm">
        Formulário de cadastro
      </Typography>
      <Form
        onSubmit={onSubmitForm}
        validations={{ cpf: validateCPF, password: validatePassword }}
      />
    </Container>
  )
}

function onSubmitForm(data) {
  console.log(data)
}

export default App
