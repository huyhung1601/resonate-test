import { useCallback, useEffect, useState } from "react";

export const useTable = (items) => {
  const [slideItems, setSlideItems] = useState([]);
  const [slideBtns, setSlideBtns] = useState([]);
  const [range, setRange] = useState([]);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(5);
  const [sortedBy, setSortedBy] = useState("username");

  const sliceBackward = useCallback(
    (num) => {
      if ((num === 1 && page > 1) || (num === 5 && page > 5)) {
        setPage((p) => p - num);
      }
    },
    [page, setPage]
  );

  const sliceForward = useCallback(
    (num) => {
      if (
        (num === 1 && page < range.length) ||
        (num === 5 && page + 5 < range.length)
      ) {
        setPage((p) => p + num);
      }
    },
    [page, range, setPage]
  );

  const sliceTo = useCallback(
    (num) => {
      setPage(num);
    },
    [setPage]
  );

  const handleRows = useCallback(
    (e) => {
      setPage(1);
      setRows(e.target.value);
    },
    [setPage, setRows]
  );

  const handleSort = (sortBy) => {
    if (sortBy === sortedBy) {
      setSortedBy("");
    }
    if (sortBy !== sortedBy) {
      setSortedBy(sortBy);
    }
  };

  //calculate number of slide buttons
  const calculateBtns = (items, rows) => {
    const range = [];
    const num = Math.ceil(items.length / rows);
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };

  useEffect(() => {
    const range = calculateBtns(items, rows);
    setRange(range);
  }, [items, rows]);

  //set active slideButtons
  useEffect(() => {
    if (range.length > 5) {
      const btns = range.slice(
        Math.ceil(page / 5 - 1) * 5,
        Math.ceil(page / 5) * 5
      );
      setSlideBtns([...btns]);
    } else {
      setSlideBtns([...range]);
    }
  }, [page, range, rows]);

  //set active slideItems
  useEffect(() => {
    let data;
    if (sortedBy !== "") {
      // with sorting
      data = items
        .slice()
        .sort(function (a, b) {
          if (a[`${sortedBy}`] < b[`${sortedBy}`]) {
            return -1;
          }
          if (a[`${sortedBy}`] > b[`${sortedBy}`]) {
            return 1;
          }
          return 0;
        })
        .slice((page - 1) * rows, page * rows);
    } else {
      //without sorting
      data = items.slice((page - 1) * rows, page * rows);
    }
    setSlideItems([...data]);
  }, [items, rows, page, sortedBy, setSlideItems]);

  return {
    slideItems,
    page,
    range,
    rows,
    slideBtns,
    sortedBy,
    handleSort,
    handleRows,
    sliceForward,
    sliceBackward,
    sliceTo,
  };
};
