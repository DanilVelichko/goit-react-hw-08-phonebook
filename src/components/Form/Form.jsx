import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

const Form = ({ clickSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newObjContacts = {
      name: name,
      number: number,
    };

    clickSubmit(newObjContacts);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Taras Shevchenko"
            required
          />
        </label>

        <h3>Number</h3>
        <label>
          <input
            type="tel"
            value={number}
            onChange={handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="+38-12345678"
            required
          />
        </label>

        <button className={css.add_button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  clickSubmit: PropTypes.func,
};

export default Form;
