"use client";

import { useSearchParams } from "next/navigation";
import { Pagination, Skeleton } from "@repo/ui";
import TableMUI from "@repo/ui/table";
import { NextLinkComposed } from "@/app/components/link";
import { useDataTable, usePagination } from "@/app/components/table.hooks";

export default function Table() {
  const searchParams = useSearchParams();
  const { data } = useDataTable({ searchParams });
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
        ? <Skeleton
            variant="rectangular"
            width="100%"
            height={440}
            animation="wave" 
          />
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