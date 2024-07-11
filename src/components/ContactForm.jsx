import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../redux/reducers'
import { Form, Input, Button } from '../styles/ContactFormStyles'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const contacts = useSelector((state) => state.contacts) // Obtém a lista de contatos do estado
  const dispatch = useDispatch()

  const handleEmailChange = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)

    // Verifica se o e-mail já existe na lista de contatos
    const emailExists = contacts.some((contact) => contact.email === newEmail)
    if (emailExists) {
      setEmailError('O e-mail já está em uso!')
    } else {
      setEmailError('')
    }
  }

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const phoneNumber = input
      .replace(/^(\d{2})(\d)/g, '($1) $2') // Coloca o DDD entre parênteses e adiciona um espaço após ele
      .replace(/(\d{5})(\d{4})$/, '$1-$2'); // Adiciona o hífen entre o quinto e o sexto dígitos
    setPhone(phoneNumber);

    // Verifica se o número de telefone já existe na lista de contatos
    const phoneExists = contacts.some((contact) => contact.phone === phoneNumber)
    if (phoneExists) {
      setPhoneError('O número de telefone já está em uso!')
    } else {
      setPhoneError('')
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    // Verifica se o e-mail ou telefone já existe na lista de contatos
    const emailExists = contacts.some((contact) => contact.email === email)
    const phoneExists = contacts.some((contact) => contact.phone === phone)

    if (emailExists) {
      setEmailError('O e-mail já está em uso!')
      return
    }

    if (phoneExists) {
      setPhoneError('O número de telefone já está em uso!')
      return
    }

    if (name && email && phone) {
      dispatch(addContact({ id: Date.now(), name, email, phone }))
      setName('')
      setEmail('')
      setPhone('')
      setEmailError('')
      setPhoneError('')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={handleEmailChange}
        required
        style={{ borderColor: emailError ? 'red' : '' }} // Muda a cor da borda se houver um erro
      />
      {emailError && <p style={{ color: 'red' }}>{emailError}</p>} {/* Mostra a mensagem de erro */}
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={handlePhoneChange}
        pattern="\(\d{2}\) \d{5}-\d{4}"
        minLength="15"
        maxLength="15"
        required
        style={{ borderColor: phoneError ? 'red' : '' }} // Muda a cor da borda se houver um erro
      />
      {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>} {/* Mostra a mensagem de erro */}
      <Button type="submit">Adicionar Contato</Button>
    </Form>
  )
}

export default ContactForm
