import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((p) => ({ ...p, [name]: value }));
  };

  return { values, handleChange };
};
