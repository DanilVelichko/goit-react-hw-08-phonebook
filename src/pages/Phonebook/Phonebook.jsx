import { Container } from 'components/App.styled';

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

export default Phonebook;
