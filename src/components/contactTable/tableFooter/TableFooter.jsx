import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

export const TableFooter = ({
  rows,
  page,
  slideBtns,
  handleRows,
  sliceBackward,
  sliceForward,
  sliceTo,
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-2">
      <select className="btn bg-light " value={rows} onChange={handleRows}>
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <span className="btn bg-light " onClick={() => sliceBackward(5)}>
        <BsArrowBarLeft />
      </span>
      <span className="btn bg-light " onClick={() => sliceBackward(1)}>
        <AiOutlineArrowLeft />
      </span>
      {slideBtns?.map((item, index) => (
        <span
          className={`btn ${
            page - Math.floor(page / 5) * 5 === index + 1 ||
            (index === 4 && page % 5 === 0)
              ? "bg-info text-white"
              : "bg-light"
          } `}
          key={index}
          onClick={() => sliceTo(index + 1)}
        >
          {item}
        </span>
      ))}
      <span className="btn bg-light " onClick={() => sliceForward(1)}>
        <AiOutlineArrowRight />
      </span>
      <span className="btn bg-light " onClick={() => sliceForward(5)}>
        <BsArrowBarRight />
      </span>
    </div>
  );
};
