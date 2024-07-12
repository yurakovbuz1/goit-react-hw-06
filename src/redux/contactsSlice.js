import { createSlice } from "@reduxjs/toolkit"

export const contactsSlice = createSlice({
	name: 'contacts',
    initialState: {
        contacts: {
            items: [],
        },
        filters: {
            name: " ",
        },
    },
	reducers: {
		addContact: (state, { payload }) => {
            state.items.push(payload);
        },
        deleteContact: (state, { payload }) => {
            state.items = state.items.filter(contact => contact.id !== payload);
        }
	}
})

export const selectContacts = (state) => state.contacts.items
export const {addContact, deleteContact} = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer