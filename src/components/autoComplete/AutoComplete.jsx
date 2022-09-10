import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterContacts } from "../../features/contacts/contactsSlice";
import { useForm } from "../../hooks/useForm";

const initialValues = { search: "" };
export const AutoComplete = () => {
  const { values, handleChange, resetValues } = useForm(initialValues);
  const { filteredContacts } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(filterContacts(values.search.toLowerCase().trim()));
  }, [values, dispatch]);

  const openContact = useCallback(
    (id) => {
      resetValues();
      navigate(`/contact/${id}`, { replace: true });
    },
    [navigate, resetValues]
  );

  return (
    <div className="d-flex justify-content-center align-items-center flex-column   ">
      <div className="input-group mt-3 w-75 posotion-relative">
        <span className="input-group-text">Search</span>
        <input
          type="text"
          className="form-control"
          placeholder="Username or Name"
          aria-label="Username"
          name="search"
          value={values.search}
          onChange={handleChange}
        />
        {values.search !== "" && (
          <div
            className="border position-absolute px-3 overflow-auto text-sm bg-light"
            style={{
              width: "61vw",
              maxHeight: "150px",
              top: "42px",
              right: -1,
              zIndex: 1000,
            }}
          >
            <ul>
              {filteredContacts?.map((item, index) => (
                <li
                  className={`text-decoration-none row text-muted  p-1 ${
                    index !== filteredContacts.length - 1 ? "border-bottom" : ""
                  }`}
                  key={item.id}
                  onClick={() => openContact(item.id)}
                >
                  <p className="col">
                    <span style={{ fontWeight: "bold" }}>Username:</span>
                    <span> {item.username}</span>
                  </p>
                  <p className="col">
                    <span style={{ fontWeight: "bold" }}>Name:</span>
                    <span> {item.name}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
