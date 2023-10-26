'use client'
import { useState } from "react";
import Modal from "../modal/modal.component";

const TradingEntries = () => {  

  const [open, setOpenModal] = useState(false); 

  const close = () => {
    setOpenModal(false);
  }

  return (
    <>
      <h1 className="self-center text-2xl font-semibold">Entries</h1>
      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">
                  Date
                </th>
                <th className="px-6 py-3">
                  Currency Pair
                </th>
                <th className="px-6 py-3">
                  Buy / Sell
                </th>
                <th className="px-6 py-3">
                  Exchange Rate
                </th>
                <th className="px-6 py-3">
                  Lot Size
                </th>
                <th className="px-6 py-3">
                  Take Profit
                </th>
                <th className="px-6 py-3">
                  Stop Loss
                </th>
                <th className="px-6 py-3"> 
                  &nbsp;
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              </tr>
            </tbody>
        </table>
        <button className="rounded-md my-3 py-2 px-4 border-2 border-stone-400" onClick={() => setOpenModal(true)}>
          <span className="text-sm">Add+</span>
        </button>
        <Modal openModal={open} closeModal={close}/>
      </div>
    </>
  );
}

export default TradingEntries;