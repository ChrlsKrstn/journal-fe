'use client'
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Modal from "../modal/modal.component";
import FormInput from "../form-input/form-input.component";
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
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
        <Modal openModal={open} closeModal={close}>
          <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-gray-900">
            Transaction
          </Dialog.Title>
          <FormInput
            label="Date"
            type="date"
            className="block w-full rounded-md"
            name="date"  
            disabled
          />
          <FormInput
            label="Transaction"
            type="text"
            className="block w-full rounded-md"
            name="username"  
          />
          <FormInput
            label="Amount (USD)"
            type="text"
            className="block w-full rounded-md"
            name="username"  
          />
          <FormInput
            label="Exchange Rate"
            type="text"
            className="block w-full rounded-md"
            name="username"  
          />
          <FormInput
            label="Amount (PHP)"
            type="text"
            className="block w-full rounded-md"
            name="username"  
          />
          <button className="rounded-md my-3 py-2 px-4 border-2 border-stone-400">
          <span className="text-sm">Save</span>
        </button>
        </Modal>
      </div>
    </>
  );
}

export default Transaction;