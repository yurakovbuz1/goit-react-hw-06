import { useDispatch } from 'react-redux';
import css from './Contact.module.css'
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDelete = (contactId) => {     
        dispatch(deleteContact(contactId));   
    };  
    return (
        <>
            <div className={css.container}>
                <div className={css.description}>
                    <p>{name}</p>
                    <p>{number}</p>
                </div>
                <button className={css.deleteButton} type='button' onClick={() => handleDelete(id)}>Delete</button>
            </div>
            
        </>
    );
}

export default Contact