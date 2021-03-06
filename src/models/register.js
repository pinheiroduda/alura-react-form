export function validateCPF(cpf) {
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

export function validatePassword(password) {
  if (password.length < 4 || password.length > 72) {
    return { valid: false, text: 'A senha deve possuir entre 4 e 72 dígitos.' }
  } else {
    return { valid: true, text: '' }
  }
}
