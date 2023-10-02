'use client'
import { FormEvent, ChangeEvent, useState } from "react";
import { signIn } from "next-auth/react";
import FormInput from "@/components/form-input/form-input.component";
  
const SignIn = () => {   
  return (
    <div className="w-96 mx-auto max-w-7xl sm:py-60 lg:py-60">
      <div className="grid gap-y-5">
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
        <button className="w-full rounded-md py-3 bg-gray-600 text-white hover:bg-gray-400" onClick={() => signIn("credentials")}>
          Login
        </button>
      </div>
      <div className="my-2 text-right">
        <p><a href="/register">Forgot password?</a></p>
      </div>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-96 h-px my-8 bg-gray-600 border-0 dark:bg-gray-700"/>
        <span className="absolute px-3 -translate-x-1/2 bg-white left-1/2">or Sign In with</span>
      </div>
      <div className="my-2 text-center">
        <button onClick={() => signIn("github")} className="mx-2">
          <img loading="lazy" height="30" width="30" id="provider-logo" src="https://authjs.dev/img/providers/github.svg"/>
        </button> 
        <button onClick={() => signIn("google")} className="mx-2"> 
        <img loading="lazy" height="30" width="30" id="provider-logo" src="https://authjs.dev/img/providers/google.svg"></img>
        </button> 
      </div>
  </div> 

  );
};


export default SignIn;