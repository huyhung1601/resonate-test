import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import { contactsSlice } from "../features/contacts/contactsSlice";

import thunk from "redux-thunk";

export const store = configureStore({
  reducer: { contacts: contactsSlice.reducer },
  middleware: new MiddlewareArray().concat(thunk),
});
