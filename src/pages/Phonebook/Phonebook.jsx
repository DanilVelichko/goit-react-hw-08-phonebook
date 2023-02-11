import { Container } from 'components/App.styled';
import PropTypes from 'prop-types';
import { Suspense, lazy } from 'react';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';

const ContactsList = lazy(() => import('components/ContactsList/ContactsList'));

const Phonebook = ({ clickSubmit, onDataUpdate, arrContacts, onDeleteBtn }) => {
  return (
    <Container>
      <Form clickSubmit={clickSubmit} />

      <Filter onDataUpdate={onDataUpdate} />

      <Suspense fallback={<div>Loading...</div>}>
        <ContactsList arrContacts={arrContacts} onDeleteBtn={onDeleteBtn} />
      </Suspense>
    </Container>
  );
};

Phonebook.propTypes = {
  arrContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDataUpdate: PropTypes.func.isRequired,
  clickSubmit: PropTypes.func.isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
};
export default Phonebook;
