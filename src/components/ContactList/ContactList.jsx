import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
import { selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filterValue = useSelector(selectNameFilter);

    let contactList;
    if (filterValue !== "") {
        contactList = contacts.filter(contact => 
            contact.name.toLowerCase().includes(filterValue.toLowerCase())
        )
    } else {
        contactList = contacts;
    }

    const dispatch = useDispatch();

    const handleDelete = (contactId) => {     
        dispatch(deleteContact(contactId));   
    };    

    return (
        <>
            <ul className={css.contactList}>
                {contactList.map((contact) => (
                <li key={contact.id} className={css.listItem}>
                    <Contact id={contact.id} name={contact.name} number={contact.number} onDelete={handleDelete} />
                </li>
                ))}
            </ul>
        </>
    );
}

export default ContactList