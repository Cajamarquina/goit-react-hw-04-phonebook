import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className="contact-list-box">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
