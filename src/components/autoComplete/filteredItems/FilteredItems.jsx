import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const FilteredItems = ({ filteredItems, resetValues }) => {
  const navigate = useNavigate();

  const openContact = useCallback(
    (id) => {
      resetValues();
      navigate(`/contact/${id}`, { replace: true });
    },
    [navigate, resetValues]
  );
  return (
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
        {filteredItems.length === 0 && (
          <li className="p-1">
            <h6>No items matching!</h6>
          </li>
        )}
        {filteredItems?.map((item, index) => (
          <li
            className={`text-decoration-none row text-muted  p-1 ${
              index !== filteredItems.length - 1 ? "border-bottom" : ""
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
  );
};
