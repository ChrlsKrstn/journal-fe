'use client'
import { useState, ChangeEvent } from "react";
import { Dialog } from "@headlessui/react";
import Modal from "../modal/modal.component";
import FormInput from "../form-input/form-input.component";
import { getDate } from "@/utils/date-helper";

const formData = {
  date: getDate(),
  transaction: "",
  amount_usd: 0,
  exchange_rate: 0,
  amount_php: 0
}

const Transaction = () => {  

  const [open, setOpenModal] = useState(false); 
  const [formFields, setFormFields] = useState(formData); 
  const {...formFieldData} = formFields; 

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;  
    setFormFields({...formFields, [name]: value });
  };    

  const deposit = async () => { 
    formFieldData.amount_php = formFieldData.amount_usd * formFieldData.exchange_rate;  
    await fetch("http://localhost:3000/middleware", {
      method: "POST",
      body: JSON.stringify({
        end_point: "deposit",
        formData: formFieldData
      })
    });
  } 

  return (
    <>
      <h1 className="self-center text-2xl font-semibold">Transaction</h1>
      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="t ext-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
        <Modal openModal={open} closeModal={() => setOpenModal(false)}>
          <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-gray-900">
            Transaction
          </Dialog.Title>
          <FormInput
            label="Date"
            type="date"
            className="block w-full rounded-md"
            name="date"  
            disabled
            value={getDate()}
          />
          <FormInput
            label="Transaction"
            type="text"
            className="block w-full rounded-md"
            name="transaction"  
            onChange={handleChange}
            value={formFieldData.transaction}
          />
          <FormInput
            label="Amount (USD)"
            type="text"
            className="block w-full rounded-md text-right"
            name="amount_usd"  
            onChange={handleChange}
            value={formFieldData.amount_usd}
          />
          <FormInput
            label="Exchange Rate"
            type="text"
            className="block w-full rounded-md text-right"
            name="exchange_rate"  
            onChange={handleChange}
            value={formFieldData.exchange_rate}
          />
          <FormInput
            label="Amount (PHP)"
            type="text"
            className="block w-full rounded-md text-right"
            name="amount_php"  
            disabled  
            onChange={handleChange}
            value={formFieldData.amount_usd * formFieldData.exchange_rate}
          />
          <button 
            className="rounded-md my-3 py-2 px-4 border-2 border-stone-400"
            onClick={deposit}
          >
          <span className="text-sm">Save</span>
        </button>
        </Modal>
      </div>
    </>
  );
}

export default Transaction;