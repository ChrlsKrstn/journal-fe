import { auth } from "@/app/api/auth/[...nextauth]/auth";
import FormInput from "../form-input/form-input.component";
import { cookies } from "next/headers";
const test = async () => { 
  return test;
}

const Transaction = async () => { 
  const cookieStore = cookies();
  const test =  await auth(); 
  return (
    <>
      <FormInput
        label="Username"
        type="text"
        className="block w-full rounded-md"
        name="username"  
      />
      <FormInput
        label="Password"
        type="password"
        className="block w-full rounded-md"
        name="password" 
      />
      <button className="w-full rounded-md py-3 bg-gray-600 text-white hover:bg-gray-400">
        Transact
      </button>
    </>
  )

}

export default Transaction;