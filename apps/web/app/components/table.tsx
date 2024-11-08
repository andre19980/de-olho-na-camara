import TableList from "@/app/components/table-list";
import TablePagination from "@/app/components/table-pagination";

export default async function Table() {
  return (
    <>
      <TableList />
      <TablePagination />
    </>
  );
}
