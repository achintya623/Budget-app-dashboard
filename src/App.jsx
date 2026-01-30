import { useState } from "react";
import "./App.css";
import data from "./transactions.json";
import ChartSection from "./components/ChartSection";
import TransactionsSection from "./components/TransactionsSection";

function App() {
  const [sliderMonth, setSliderMonth] = useState({ year: 2024, month: 12 });
  const [currentPage, setCurrentPage] = useState(1);

  const handleMonthAdd = () => {
    if (sliderMonth.month < 12) {
      setSliderMonth({ year: sliderMonth.year, month: sliderMonth.month + 1 });
    }
    if (sliderMonth.month === 12) {
      setSliderMonth({ year: sliderMonth.year + 1, month: 1 });
    }
    setCurrentPage(1);
  };

  const handleMonthSubtract = () => {
    if (sliderMonth.month > 1) {
      setSliderMonth({ year: sliderMonth.year, month: sliderMonth.month - 1 });
    }
    if (sliderMonth.month === 1) {
      setSliderMonth({ year: sliderMonth.year - 1, month: 12 });
    }
    setCurrentPage(1);
  };
  let showMonth = "";
  switch (sliderMonth.month) {
    case 1:
      showMonth = "January";
      break;
    case 2:
      showMonth = "February";
      break;
    case 3:
      showMonth = "March";
      break;
    case 4:
      showMonth = "April";
      break;
    case 5:
      showMonth = "May";
      break;
    case 6:
      showMonth = "June";
      break;
    case 7:
      showMonth = "July";
      break;
    case 8:
      showMonth = "August";
      break;
    case 9:
      showMonth = "September";
      break;
    case 10:
      showMonth = "October";
      break;
    case 11:
      showMonth = "November";
      break;
    case 12:
      showMonth = "December";
      break;
    default:
      showMonth = "";
      break;
  }

  const TransactionsForMonth = data.filter((item) => {
    const parts = item.date.split("-");
    const transactionYear = parts[0];
    const transactionMonth = parts[1];
    if (
      Number(transactionMonth) === sliderMonth.month &&
      Number(transactionYear) === sliderMonth.year
    ) {
      return true;
    }
  });

  const TotalForMonth = TransactionsForMonth.reduce((total, num) => {
    return total + num.amount;
  }, 0);

  console.log("total transactions for month", TotalForMonth);
  console.log(
    `Transactions for ${showMonth} ${sliderMonth.year}`,
    TransactionsForMonth,
  );

  // console.log("JSON data:", data);
  // const dateString = data.map((item) => {
  //   return item.date;
  // });
  // console.log("First Transaction", data[0]);
  // console.log(dateString[0]);
  // const parts = dateString[0].split("-");
  // console.log(parts);
  return (
    <div className="w-[95vw] min-h-screen ">
      <header className="w-full h-[8vh]  text-[#babec9] font-bold  flex flex-row items-center justify-start px-5">
        <div className="text-3xl w-100">Budget Dashboard</div>
      </header>
      <section className="w-full flex  h-[10vh] items-center font-bold text-xl gap-4 justify-center my-5 text-[#3a2cad]  bg-white rounded-2xl shadow-xl">
        <div onClick={() => handleMonthSubtract()}>{"<<"}</div>
        <div className=" text-3xl w-60 flex justify-center ">
          {showMonth} {sliderMonth.year}
        </div>
        <div onClick={() => handleMonthAdd()}>{">>"}</div>
      </section>
      <section className="my-5 flex justify-center items-center h-[10vh] bg-white rounded-2xl shadow-xl gap-3">
        <div className="font-bold text-2xl flex items-end h-12 ">
          TOTAL SPENT THIS MONTH
        </div>
        <div className="font-bold text-5xl">${TotalForMonth.toFixed(2)}</div>
      </section>
      <section className="w-full flex gap-5 h-[50vh]">
        <ChartSection TransactionsForMonth={TransactionsForMonth} />
        <TransactionsSection
          TransactionsForMonth={TransactionsForMonth}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </div>
  );
}

export default App;
