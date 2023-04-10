import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { LOGIN_ROUTE } from 'consts/routes';

import { Section } from 'components/common/Section';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { AddContactButton } from 'components/AddContactButton';
import { ModalWindow } from 'components/common/ModalWindow';
import { AddContactForm } from 'components/AddContactForm';

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

export default withAuthRedirect(ContactsView, LOGIN_ROUTE);
