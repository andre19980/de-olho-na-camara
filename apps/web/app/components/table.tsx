"use client";

import { useSearchParams } from "next/navigation";
import { Pagination } from "@repo/ui";
import TableMUI from "@repo/ui/table";
import { NextLinkComposed } from "@/app/components/link";
import { useDataTable, useFilteredData, usePagination } from "@/app/components/table.hooks";
import Skeleton from "./skeleton";

export default function Table() {
  const { deputados } = useDataTable();
  const searchParams = useSearchParams();
  const data = useFilteredData({ deputados, searchParams })
  const {
    totalPages,
    page,
    loading,
    items,
    handleChangePage,
  } = usePagination({ dataLength: data.length, searchParams });

  return (
    <>
      {loading
        ? <Skeleton height={440} />
        : <TableMUI
            data={data}
            page={page}
            items={items}
            linkComponent={NextLinkComposed}
          />}
      <Pagination
        count={totalPages}
        color="primary"
        page={page}
        style={{
          margin: 'auto'
        }}
        siblingCount={0}
        boundaryCount={1}
        onChange={handleChangePage}
      />
    </>
  );
  
}