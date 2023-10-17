import React from 'react';

const ContactForm = ({ name, number, handleChange, handleSubmit }) => {
  return (
    <div className="contact-form-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          required
          autoComplete="name"
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          value={number}
          onChange={handleChange}
          required
          autoComplete="tel"
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
