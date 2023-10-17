import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className="contact-form-box">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            required
            autoComplete="name"
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={number}
            onChange={this.handleChange}
            required
            autoComplete="tel"
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
