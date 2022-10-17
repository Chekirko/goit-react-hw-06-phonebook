import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Container, PageTitle, ContactsTitle } from './App.styled';

const App = function () {
  // const savedContacts = localStorage.getItem('contacts');
  // const parsedContacts = JSON.parse(savedContacts);
  // const [contacts, setContacts] = useState(
  //   parsedContacts ? [...parsedContacts] : []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handleAddContact = (name, number) => {
  //   const newName = {
  //     id: nanoid(),
  //     name: name,
  //     number: number,
  //   };

  //   setContacts(prev => {
  //     return [newName, ...prev];
  //   });
  // };

  // const handleDeleteContact = contactId => {
  //   setContacts(prevState => {
  //     return [...prevState.filter(contact => contact.id !== contactId)];
  //   });
  // };

  return (
    <Container>
      <PageTitle>Phonebook</PageTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />

      <ContactList />
    </Container>
  );
};

export default App;
