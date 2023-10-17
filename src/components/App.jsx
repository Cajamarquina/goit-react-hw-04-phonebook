import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (name.trim() === '' || number.trim() === '') {
      alert('Name and number cannot be empty');
      return;
    }

    const isExist = contacts.some((contact) => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
    setName('');
    setNumber('');
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
