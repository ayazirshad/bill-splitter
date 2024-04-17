import React, { useState } from "react";
import Bill from "./Bill";

const Home = () => {
  const bandy = [
    "Ali",
    "Ayaz",
    "Shafqat",
    "Nouman",
    "Hamza",
    "Anwar",
    "Hanzala",
    "Saim",
    "Muneeb",
    "Ans",
    "Khaja",
    "Mota",
    "Bilal",
    "Doctor",
  ];
  const persons = bandy.sort();
  const [selectedBandy, setSelectedBandy] = useState([]);
  const [chez, setChez] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState([]);

  const [isBillOpen, setIsBillOpen] = useState(false);
  const updateSelectedBandy = (banda) => {
    const index = selectedBandy.indexOf(banda);
    if (index !== -1) {
      const updatedBandy = [...selectedBandy];
      updatedBandy.splice(index, 1);
      setSelectedBandy(updatedBandy);
    } else {
      setSelectedBandy([...selectedBandy, banda]);
    }
  };

  const updateItems = (e) => {
    e.preventDefault();
    if (selectedBandy.length > 0) {
      const newItem = {
        chez,
        price,
        selectedBandy,
      };
      setItems([...items, newItem]);
      setChez("");
      setPrice("");
      setSelectedBandy([]);
    } else {
      alert("bandy tu select kar");
    }
  };

  const showBill = () => {
    if (items.length > 0) {
      setIsBillOpen(true);
    } else {
      alert("pehly kuch likh tu sai...");
    }
  };

  return (
    <div className="bg-[#2A2438] text-[#DBD8E3] min-h-screen px-3 py-8 relative overflow-hidden">
      <h1 className="text-center font-bold text-xl mb-3">Bill Splitter</h1>
      <form className="flex flex-col gap-4" onSubmit={updateItems}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="bg-transparent p-2 border border-gray-500 rounded-md outline-none focus:border-gray-300"
            placeholder="type item..."
            required
            value={chez}
            onChange={(e) => setChez(e.target.value)}
          />
          <input
            type="text"
            className="bg-transparent p-2 border border-gray-500 rounded-md outline-none focus:border-gray-300"
            placeholder="price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {persons.map((item, index) => {
            return (
              <div
                role="button"
                key={index}
                className={`${
                  selectedBandy.find((banda) => banda === item)
                    ? "bg-[#72698b]"
                    : "bg-[#DBD8E3]"
                } text-[#2A2438] w-max p-2 rounded-md`}
                onClick={() => updateSelectedBandy(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
        <button className="bg-[#5C5470] p-2 rounded-md w-40" type="submit">
          Add
        </button>
      </form>
      <div className="flex gap-3 mt-3 flex-wrap">
        {items.length > 0 &&
          items.map((item, index) => <span key={index}>{item.chez}</span>)}
      </div>
      <div className="text-center mt-10">
        <button className="bg-[#5C5470] p-2 rounded-md w-40" onClick={showBill}>
          Calculate Bill
        </button>
      </div>
      <div className="text-center mt-5 text-sm">
        ⚠️ Bill calculate karty hoye refresh na karna...
      </div>
      <div
        className={`${isBillOpen ? "right-0" : "-right-full"}
         h-screen top-0 bg-[#2A2438] w-full
        transition-all duration-300 absolute overflow-y-auto
        `}
      >
        <Bill setIsBillOpen={setIsBillOpen} items={items} />
      </div>
    </div>
  );
};

export default Home;
