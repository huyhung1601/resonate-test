import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../components";
import { getContacts } from "../features/contacts/contactsAPI";

const Contacts = () => {
  const {
    contacts: { filteredContacts, loading, error },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <table className="table table-striped text-sm">
      <thead>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {filteredContacts.length === 0 && <p>No matching search!</p>}
        {filteredContacts?.length > 0 &&
          filteredContacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.username}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <a href="https://www.google.com/" target="_blank">
                  {contact.website}
                </a>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Contacts;
