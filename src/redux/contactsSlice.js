import { createSlice } from "@reduxjs/toolkit"

export const contactsSlice = createSlice({
	name: 'contacts',
    initialState: {
        contacts: {
            items: JSON.parse(localStorage.getItem('contacts')) ?? [
                { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            ],
        },
        filters: {
            name: " ",
        },
    },
	reducers: {
		addContact: (state, { payload }) => {
            state.contacts.items.push(payload);
            localStorage.setItem('contacts', JSON.stringify(state.contacts.items));
        },
        deleteContact: (state, { payload }) => {
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload);
            localStorage.setItem('contacts', JSON.stringify(state.contacts.items));
        }
	}
})

export const selectContacts = (state) => state.contacts.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;