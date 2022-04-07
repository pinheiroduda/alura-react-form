import { Form } from './components/form/Form'

import { Container } from '@mui/material'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Form onSubmit={onSubmitForm} />
    </Container>
  )
}

function onSubmitForm(data) {
  console.log(data)
}

export default App
