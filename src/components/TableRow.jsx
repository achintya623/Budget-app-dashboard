import React from "react";

export default function TableRow({ transaction }) {
  return (
    <tr>
      <td className="items-center text-center">{transaction.payee}</td>
      <td className="items-center text-center">{transaction.date}</td>
      <td className="items-center text-center">${transaction.amount}</td>
      <td className="items-center text-center">{transaction.category}</td>
    </tr>
  );
}
