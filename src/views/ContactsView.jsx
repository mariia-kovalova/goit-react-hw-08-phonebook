import { useState } from 'react';
import { Section } from 'components/Section';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { AddContactButton } from 'components/AddContactButton';
import { ModalWindow } from 'components/ModalWindow';
import { AddContactForm } from 'components/AddContactForm';

const ContactsView = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Section>
        <Filter />
      </Section>
      <Section>
        <ContactList />
        <AddContactButton onOpenModal={handleToggleModal} />
      </Section>
      {showModal && (
        <ModalWindow onCloseModal={handleToggleModal}>
          <AddContactForm onCloseModal={handleToggleModal} />
        </ModalWindow>
      )}
    </>
  );
};

export default ContactsView;
