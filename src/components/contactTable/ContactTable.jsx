import { useTable } from "../../hooks/useTable";
import { TableBody } from "./tableBody/TableBody";
import { TableFooter } from "./tableFooter/TableFooter";
import { TableHeader } from "./tableHeader/TableHeader";

export const ContactTable = ({ filteredContacts, contacts }) => {
  const {
    slideItems,
    page,
    rows,
    slideBtns,
    sortedBy,
    handleSort,
    sliceForward,
    sliceBackward,
    sliceTo,
    handleRows,
  } = useTable(filteredContacts, 5);

  return (
    <div className="card p-2 " style={{ minWidth: "75%" }}>
      <table className="table table-striped text-sm">
        <TableHeader sortedBy={sortedBy} handleSort={handleSort} />
        <TableBody slideItems={slideItems} contacts={contacts} />
      </table>
      <TableFooter
        page={page}
        rows={rows}
        slideBtns={slideBtns}
        sliceBackward={sliceBackward}
        sliceForward={sliceForward}
        sliceTo={sliceTo}
        handleRows={handleRows}
      />
    </div>
  );
};
