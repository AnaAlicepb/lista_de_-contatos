// ContactForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/reducers';
import { Form, Input, Button } from '../styles/ContactFormStyles';

// Função para capitalizar o nome
const capitalizeName = (name) => {
  return name.replace(/\b\w/g, (char) => char.toUpperCase());
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailExists = contacts.some((contact) => contact.email === newEmail);
    if (emailExists) {
      setEmailError('O e-mail já está em uso!');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    const phoneNumber = input
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d{4})$/, '$1-$2');
    setPhone(phoneNumber);

    const phoneExists = contacts.some((contact) => contact.phone === phoneNumber);
    if (phoneExists) {
      setPhoneError('O número de telefone já está em uso!');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailExists = contacts.some((contact) => contact.email === email);
    const phoneExists = contacts.some((contact) => contact.phone === phone);

    if (emailExists) {
      setEmailError('O e-mail já está em uso!');
      return;
    }

    if (phoneExists) {
      setPhoneError('O número de telefone já está em uso!');
      return;
    }

    if (name && email && phone) {
      // Capitalizando o nome antes de adicionar
      const capitalizedName = capitalizeName(name);
      dispatch(addContact({ id: Date.now(), name: capitalizedName, email, phone }));
      setName('');
      setEmail('');
      setPhone('');
      setEmailError('');
      setPhoneError('');
    }
  };

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
        style={{ borderColor: emailError ? 'red' : '' }}
      />
      {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={handlePhoneChange}
        pattern="\(\d{2}\) \d{5}-\d{4}"
        minLength="15"
        maxLength="15"
        required
        style={{ borderColor: phoneError ? 'red' : '' }}
      />
      {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
      <Button type="submit">Adicionar Contato</Button>
    </Form>
  );
};

export default ContactForm;
