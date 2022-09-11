import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../features/contacts/contactsSlice";
import { useForm } from "../../hooks/useForm";

const initialValues = {
  search: "",
};

export const SearchBar = () => {
  const dispatch = useDispatch();
  const { values, handleChange } = useForm(initialValues);

  useEffect(() => {
    dispatch(filterContacts(values.search.toLowerCase().trim()));
  }, [values, dispatch]);

  return (
    <>
      <div className="input-group w-75 my-2">
        <span className="input-group-text" id="basic-addon1">
          Search
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username or Name"
          aria-label="Username"
          name="search"
          value={values.search}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
