import React from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import GlobalStyles from './styles/GlobalStyles'
import styled from 'styled-components'

const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;

  h1 {
    color: #000000;
    font-size: 2.5em; /* Tamanho da fonte */
    margin-bottom: 20px; /* Espaço abaixo do título */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra do texto */
    text-align: center; /* Centraliza o texto */
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <h1>Lista de Contatos</h1>
        <ContactForm />
        <ContactList />
      </Container>
    </div>
  )
}

export default App
