import React from "react";
import { SortBtn } from "./SortBtn";

export const TableHeader = ({ sortedBy, handleSort }) => {
  return (
    <thead>
      <tr>
        <th>
          <p>Detail </p>
        </th>
        <th>
          <p>
            Username
            <span onClick={() => handleSort("username")}>
              <SortBtn active={sortedBy === "username"} />
            </span>
          </p>
        </th>
        <th>
          <p>
            Name
            <span onClick={() => handleSort("name")}>
              <SortBtn active={sortedBy === "name"} />
            </span>
          </p>
        </th>
        <th>
          <p>Email</p>
        </th>
        <th>
          <p>Phone</p>
        </th>
        <th>
          <p>Website</p>
        </th>
      </tr>
    </thead>
  );
};
