import { Section } from 'components/common/Section';
// import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

const ContactsView = () => {
  return (
    <>
      <Section>{/* <ContactForm /> */}</Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default ContactsView;
