import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const localContacts = localStorage.getItem('contacts');
  //   if (localContacts) {
  //     return JSON.parse(localContacts);
  //   } else {
  //     return [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  //     ];
  //   }
  // });
  // const [filteredContacts, setFilteredContacts] = useState(contacts);
  // const [value, setValue] = useState('')

  // const handleSearchInput = (e) => {
  //   setValue(e.target.value);
  // }
  
  // useEffect(() => {
    // setFilteredContacts(contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(value.toLowerCase())
    // ));
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts, value])

  // const handleFormInput = (contact) => {
  //   console.log('contact :>> ', contact);
  //   setContacts([...contacts, contact]);
  // }

  // const handleOnDelete = (contactId) => {     
  //   setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId)      
  //   );    
  // };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>

    </>
  )
}

export default App
