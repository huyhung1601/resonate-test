import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactTable, SearchBar, Spinner } from "../components";
import { getContacts } from "../features/contacts/contactsAPI";

const Contacts = () => {
  const {
    contacts: { filteredContacts, contacts, loading, error },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="d-flex align-items-center flex-column gap-2">
      <SearchBar />
      {loading && <Spinner />}
      {error && <p>Something went wrong!</p>}
      {!loading && !error && (
        <ContactTable filteredContacts={filteredContacts} contacts={contacts} />
      )}
    </div>
  );
};

export default Contacts;
