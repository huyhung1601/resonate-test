import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../features/contacts/contactsSlice";
import { useForm } from "../../hooks/useForm";
import { FilteredItems } from "./filteredItems/FilteredItems";

const initialValues = { search: "" };
export const AutoComplete = () => {
  const { values, handleChange, resetValues } = useForm(initialValues);
  const { filteredContacts } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterContacts(values.search.toLowerCase().trim()));
  }, [values, dispatch]);

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
          <FilteredItems
            filteredItems={filteredContacts}
            resetValues={resetValues}
          />
        )}
      </div>
    </div>
  );
};
