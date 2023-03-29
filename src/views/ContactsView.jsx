import { AddContactButton } from 'components/AddContactButton';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

const ContactsView = () => {
  return (
    <>
      <Section>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
        <AddContactButton />
      </Section>
    </>
  );
};

export default ContactsView;
