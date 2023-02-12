import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactsList = ({ arrContacts, onDeleteBtn }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <ul className={css.contacts_list}>
      {arrContacts.map(contact => {
        return (
          <ContactsItem
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteBtn={onDeleteBtn}
          />
        );
      })}
      {isLoading && !error && <h4>Request in progress...</h4>}{' '}
    </ul>
  );
};

ContactsList.propTypes = {
  arrContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteBtn: PropTypes.func.isRequired,
};
export default ContactsList;
