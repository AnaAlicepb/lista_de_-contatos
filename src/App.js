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

  h1 {
    color: #fff;
    font-size: 2.5em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
    margin: 20px auto;

    h1 {
      font-size: 2em;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
    margin: 10px auto;

    h1 {
      font-size: 1.5em;
    }
  }
`;

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
