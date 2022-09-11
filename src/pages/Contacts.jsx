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
    <div className="d-flex align-items-center flex-column">
      <SearchBar />
      <div className="text-center my-3">
        <h3>Contacts</h3>
      </div>
      {loading && <Spinner />}
      {error && <p>Something went wrong!</p>}
      {!loading && !error && (
        <div className="container d-flex justify-content-center align-items-certer ">
          <ContactTable
            filteredContacts={filteredContacts}
            contacts={contacts}
          />
        </div>
      )}
    </div>
  );
};

export default Contacts;
