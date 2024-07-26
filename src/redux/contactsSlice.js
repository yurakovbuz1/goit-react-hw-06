import { createSlice } from "@reduxjs/toolkit"

export const contactsSlice = createSlice({
	name: 'contacts',
    initialState: {
        contacts: {
            items: [],
        },
        filters: {
            name: '',
        },
    },
	reducers: {
		addContact: (state, { payload }) => {
            state.contacts.items.push(payload);
        },
        deleteContact: (state, { payload }) => {
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload);
        }
	}
})

export const selectContacts = (state) => state.contacts.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;