import React, { useState } from "react";
import TableRow from "./TableRow";

export default function TransactionsSection({
  TransactionsForMonth,
  currentPage,
  setCurrentPage,
}) {
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleTransactions = TransactionsForMonth.slice(startIndex, endIndex);
  const totalPages = Math.ceil(TransactionsForMonth.length / itemsPerPage);

  console.log("total pages", totalPages);

  console.log("5 transactions", visibleTransactions);

  return (
    <div className=" bg-white w-[55%] rounded-2xl shadow-2xl">
      <div className="w-full h-[20%] flex items-center px-10 text-2xl font-bold">
        Transactions This Month
      </div>
      <table className="w-full h-[60%] table-fixed">
        <thead>
          <tr>
            <th className="w-[30%]">Payee</th>
            <th className="w-[20%]">Date</th>
            <th className="w-[25%]">Amount</th>
            <th className="w-[25%]">Category</th>
          </tr>
        </thead>
        <tbody>
          {visibleTransactions.map((item) => (
            <TableRow
              transaction={item}
              key={`${item.date}-${item.amount}-${item.payee}-${item.category}`}
            />
          ))}
        </tbody>
      </table>
      <div className="w-full h-[20%] flex items-center justify-center gap-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? `text-blue-700` : `text-black`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
