import styled, { createGlobalStyle, keyframes } from 'styled-components';

// Definindo a animação para a transição de preto
const blackTransition = keyframes`
  0% {
    background-color: #000000; /* Preto profundo */
  }
  50% {
    background-color: #1a1a1a; /* Preto mais claro */
  }
  100% {
    background-color: #000000; /* Preto profundo */
  }
`;

// Estilos globais
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins";
    animation: ${blackTransition} 40s infinite; /* Animação mais lenta */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #000; /* Preto profundo */
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
`

export default GlobalStyles;
