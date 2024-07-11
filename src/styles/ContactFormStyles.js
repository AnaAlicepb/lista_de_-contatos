// src/styles/ContactFormStyles.js
import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #000; /* Fundo preto intenso */
  border: 10px solid; /* Borda dourada com gradiente */
  border-image-slice: 1;
  border-width: 10px;
  border-image-source: linear-gradient(to left, #d4af37, #FFD700); /* Gradiente dourado */
  box-shadow: 0px 0px 20px rgba(255, 215, 0, 0.5); /* Brilho dourado */
  padding: 20px; /* Espaço interno */
`

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;
  background-color: #f8f8ff;
`

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #d4af37; /* Cor dourada */
  color: #1a1a1a; /* Cor do texto no botão */
  border: none;
  border-radius: 3px;

  &:hover {
      background-color: #d4af37; /* Cor dourada clara ao passar o mouse */
      box-shadow: 0px 0px 20px rgba(255, 215, 0, 0.4); /* Aumenta o brilho ao passar o mouse */
  }
`
