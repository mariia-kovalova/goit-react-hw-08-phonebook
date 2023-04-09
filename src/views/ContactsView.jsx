import { useState } from 'react';
import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { Section } from 'components/common/Section';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { AddContactButton } from 'components/AddContactButton';
import { ModalWindow } from 'components/common/ModalWindow';
import { AddContactForm } from 'components/AddContactForm';
import { Helmet } from 'react-helmet';

const ContactsView = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
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

export default withAuthRedirect(ContactsView, '/login');
