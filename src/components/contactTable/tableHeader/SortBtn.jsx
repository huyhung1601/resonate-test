import React from "react";
import { AiOutlineSortAscending } from "react-icons/ai";

export const SortBtn = ({ active }) => {
  return (
    <>
      <AiOutlineSortAscending
        className={`ms-1 border-info ${
          active ? "text-white bg-info " : "bg-light"
        } `}
        style={{ opacity: 0.5 }}
        size={12}
      />
    </>
  );
};
