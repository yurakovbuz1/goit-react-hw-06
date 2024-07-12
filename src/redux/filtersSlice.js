import { createSlice } from "@reduxjs/toolkit"

export const filtersSlice = createSlice({
	name: 'filters',
    initialState: {
        contacts: {
            items: [],
        },
        filters: {
            name: " ",
        },
    },
	reducers: {
		changeFilter: (state, {payload}) => {
			state.value = payload
		}
	}
})

export const selectNameFilter = (state) => state.filters.name
export const {changeFilter} = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer	

