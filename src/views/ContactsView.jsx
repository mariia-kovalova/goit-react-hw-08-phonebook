import { useState } from 'react';

import { Section } from 'components/Section';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { AddContactButton } from 'components/AddContactButton';
import { ModalWindow } from 'components/ModalWindow';
import { ContactForm } from 'components/ContactForm';

const ContactsView = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <Section>
      <Filter />
      <ContactList />
      <AddContactButton onOpenModal={toggleModal} />
      {showModal && (
        <ModalWindow onModalClose={toggleModal}>
          <ContactForm onModalClose={toggleModal} />
        </ModalWindow>
      )}
    </Section>
  );
};

export default ContactsView;
