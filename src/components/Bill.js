import moment from "moment/moment";
import React, { useEffect, useState } from "react";

const Bill = ({ setIsBillOpen, items }) => {
  const date = new Date();
  const initialBillState = {
    Ali: 0,
    Shafqat: 0,
    Ayaz: 0,
    Doctor: 0,
    Nouman: 0,
    Hamza: 0,
    Anwar: 0,
    Hanzala: 0,
    Saim: 0,
    Muneeb: 0,
    Ans: 0,
    Khaja: 0,
    Mota: 0,
    Bilal: 0,
  };
  const [bills, setBills] = useState(initialBillState);

  useEffect(() => {
    const calculateBill = () => {
      const updatedBills = { ...initialBillState };
      items.forEach((item) => {
        const divider = item.selectedBandy.length;
        const price = parseInt(item.price);
        const perHead = price / divider;
        item.selectedBandy.forEach((person) => {
          updatedBills[person] += perHead;
        });
      });
      setBills(updatedBills);
    };
    calculateBill();
  }, [items]);

  return (
    <div className="p-3 flex flex-col justify-center items-center min-h-screen">
      <p className="mb-2 text-sm">
        {moment(date).format("DD-MMM-YYYY [at] hh:mm A")}
      </p>
      <div className="p-3 rounded-lg bg-[#5C5470] w-full">
        <div className="flex justify-between px-3 mb-3">
          <h1 className="font-bold">Bill</h1>
          <button onClick={() => setIsBillOpen(false)}>close</button>
        </div>
        <div className="bg-[#2A2438] mb-3 p-3 rounded-md flex flex-col gap-1">
          {Object.entries(bills).map(([person, bill]) => (
            <div
              key={person}
              className="  flex justify-between border-b border-b-gray-500"
            >
              <span>{person}</span>
              <span>{bill.toFixed(1)}</span>
            </div>
          ))}
        </div>
      </div>
      <h1 className="font-bold text-lg mt-3">Screenshot ly lo...😀</h1>
    </div>
  );
};

export default Bill;
