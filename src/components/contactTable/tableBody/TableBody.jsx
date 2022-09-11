import React from "react";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

export const TableBody = ({ slideItems }) => {
  return (
    <>
      <tbody>
        {slideItems?.length > 0 &&
          slideItems?.map((contact) => (
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
    </>
  );
};
