import React from "react";
import { Chart } from "react-google-charts";

export default function ChartSection({ TransactionsForMonth }) {
  const categoryTotal = TransactionsForMonth.reduce((acc, tx) => {
    acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
    return acc;
  }, {});

  const chartData = [["category", "amount"], ...Object.entries(categoryTotal)];

  console.log("category total", categoryTotal);

  const options = {
    title: "Expenses By Category",
  };
  return (
    <div className="w-[45%] rounded-2xl bg-white flex justify-center items-center shadow-2xl">
      <Chart
        chartType="PieChart"
        data={chartData}
        options={options}
        width={"95%"}
        height={"95%"}
      />
    </div>
  );
}
