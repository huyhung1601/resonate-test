import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
);
