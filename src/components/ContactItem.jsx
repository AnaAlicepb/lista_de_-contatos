import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact, editContact } from '../redux/reducers';
import { Item, Button, TextContainer, ButtonContainer, Image, } from '../styles/ContactItemStyles';

const femaleSuffixes = ['a', 'e', 'ia', 'la', 'ra', 'na'];
const maleSuffixes = ['o', 'os', 'es', 'io', 'or'];

const getImageByGender = (name) => {
  const lowerName = name.toLowerCase();

  if (femaleSuffixes.some(suffix => lowerName.endsWith(suffix))) {
    return '/images/menina.jpg';
  } else if (maleSuffixes.some(suffix => lowerName.endsWith(suffix))) {
    return '/images/menino.jpg';
  } else {
    return '/images/outro.png'; // Imagem padrão caso o nome não corresponda aos sufixos
  }
};

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  const handleEdit = () => {
    const newName = prompt('Novo nome:', contact.name);
    const newEmail = prompt('Novo e-mail:', contact.email);
    const newPhone = prompt('Novo telefone:', contact.phone);

    if (newName && newEmail && newPhone) {
      dispatch(editContact({ ...contact, name: newName, email: newEmail, phone: newPhone }));
    }
  };

  return (
    <Item>
      <TextContainer>
        <Image src={getImageByGender(contact.name)} alt={contact.name} />
        <strong>{contact.name}</strong><br />
        {contact.email}<br />
        {contact.phone}
      </TextContainer>
      <ButtonContainer>
        <Button className="edit" onClick={handleEdit}>Editar</Button>
        <Button className="remove" onClick={handleRemove}>Remover</Button>
      </ButtonContainer>
    </Item>
  );
};

export default ContactItem;
