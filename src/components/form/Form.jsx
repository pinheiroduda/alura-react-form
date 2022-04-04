import React from 'react';

export function Form() {
  return (
    <>
      <form>
        <label>Nome</label>
        <input type="text" />
        
        <label>Sobrenome</label>
        <input type="text" />
        
        <label>CPF</label>
        <input type="text" />
        
        <label>Promoções</label>
        <input type="checkbox" />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}