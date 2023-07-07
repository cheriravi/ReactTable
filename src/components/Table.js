import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useSortableTable } from "../useSortableTable";
import TableFooter from './TableFooter'
const Table = ({ caption, data, columns }) => {
  var [tableData, handleSorting] = useSortableTable(data, columns);

  return (
    <>
      <table className="table">
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData }} />
      </table>
      <TableFooter/>
    </>
  );
};

export default Table;
