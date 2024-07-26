import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
import { selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filterValue = useSelector(selectNameFilter);

    const contactList = contacts.filter(contact => 
            contact.name.toLowerCase().includes(filterValue?.toLowerCase()))

    console.log('contactList :>> ', contactList);

    return (
        <>
            <ul className={css.contactList}>
                {contactList.map((contact) => (
                <li key={contact.id} className={css.listItem}>
                    <Contact id={contact.id} name={contact.name} number={contact.number} />
                </li>
                ))}
            </ul>
        </>
    );
}

export default ContactList;