'use client'
import { useState } from "react";
import Modal from "../modal/modal.component";

const Transaction = () => {  

  const [open, setOpenModal] = useState(false); 

  const close = () => {
    setOpenModal(false);
  }

  return (
    <>
      <h1 className="self-center text-2xl font-semibold">Transaction</h1>
      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">
                    Date
                </th>
                <th className="px-6 py-3">
                    Transaction
                </th>
                <th className="px-6 py-3">
                    Amount (USD)
                </th>
                <th className="px-6 py-3">
                    Exchange Rate
                </th>
                <th className="px-6 py-3">
                  Amount (PHP)
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

export default Transaction;