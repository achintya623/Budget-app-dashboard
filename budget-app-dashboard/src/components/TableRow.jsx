import React from "react";

export default function TableRow({ transaction }) {
  return (
    <tr>
      <td>{transaction.payee}</td>
      <td>{transaction.date}</td>
      <td>${transaction.amount}</td>
      <td>{transaction.category}</td>
    </tr>
  );
}
