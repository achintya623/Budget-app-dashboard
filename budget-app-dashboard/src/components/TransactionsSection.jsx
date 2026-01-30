import React, { useState } from "react";
import TableRow from "./TableRow";

export default function TransactionsSection({ TransactionsForMonth }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleTransactions = TransactionsForMonth.slice(startIndex, endIndex);
  const totalPages = Math.ceil(TransactionsForMonth.length / itemsPerPage);

  console.log("total pages", totalPages);

  console.log("5 transactions", visibleTransactions);

  return (
    <div className=" bg-white w-[55%] rounded-2xl shadow-2xl">
      <table>
        <thead>
          <tr>
            <th>Payee</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
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
      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
