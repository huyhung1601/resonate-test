import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar, Spinner } from "../components";
import { getContacts } from "../features/contacts/contactsAPI";
import { AiFillEye } from "react-icons/ai";

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
        <table className="table  table-striped text-sm">
          <thead>
            <tr>
              <th>Detail</th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts?.length === 0 && contacts.length > 0 && (
              <h6 className="mt-3">No contact match!</h6>
            )}
            {filteredContacts?.length > 0 &&
              filteredContacts?.map((contact) => (
                <tr key={contact.id}>
                  <td className="text-center ">
                    <Link
                      className="text-decoration-none, text-info"
                      to={`/contact/${contact.id}`}
                    >
                      <AiFillEye />
                    </Link>
                  </td>
                  <td>{contact.username}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <a
                      href="https://www.google.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {contact.website}
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Contacts;
