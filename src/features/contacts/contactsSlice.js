import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./contactsAPI";

const initialState = {
  contacts: [],
  filteredContacts: [],
  loading: false,
  error: false,
};

export const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      if (action.payload === "") {
        state.filteredContacts = state.contacts;
      }
      if (action.payload !== "") {
        const filterByName = state.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(action.payload)
        );
        const filterByUsername = state.contacts.filter((contact) =>
          contact.username.toLowerCase().includes(action.payload)
        );
        state.filteredContacts = [
          ...new Set(filterByUsername.concat(filterByName)),
        ];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.filteredContacts = action.payload;
      state.loading = false;
    });
    builder.addCase(getContacts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getContacts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { filterContacts } = contactsSlice.actions;
