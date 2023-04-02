import { useState } from 'react';
import { Section } from 'components/Section';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { AddContactButton } from 'components/AddContactButton';
import { ModalWindow } from 'components/ModalWindow';
import { AddContactForm } from 'components/AddContactForm';

const ContactsView = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Section>
        <Filter />
      </Section>
      <Section>
        <ContactList />
        <AddContactButton onOpenModal={toggleModal} />
      </Section>
      {showModal && (
        <ModalWindow onModalClose={toggleModal}>
          <AddContactForm onModalClose={toggleModal} />
        </ModalWindow>
      )}
    </>
  );
};

export default ContactsView;
