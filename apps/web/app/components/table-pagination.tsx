"use client";

import { useContext } from "react";
import { TableFilterContext } from "../_contexts/table";
import { Pagination } from "@repo/ui";

export default function TablePagination() {
  const context = useContext(TableFilterContext);
  const total =
    (context?.length &&
      context?.length > 0 &&
      Math.ceil(context.length / context.items)) ||
    0;

  return (
    <Pagination
      count={total}
      color="primary"
      page={context?.page}
      style={{
        margin: "auto",
      }}
      siblingCount={0}
      boundaryCount={1}
      onChange={context?.handleChangePage}
    />
  );
}
