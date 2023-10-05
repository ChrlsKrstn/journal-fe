'use client' 
import { signIn } from "next-auth/react";
import FormInput from "@/components/form-input/form-input.component";
import { useState, ChangeEvent } from "react";

const formData = {
  username: "",
  password: ""
}

const handleLogin = async (username: string, password: string) => { 
  const res = await signIn('credentials', {
    username: username,
    password: password,  
    redirect: false
  });  
  console.log(res?.status)
  return res;
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(formData);
  const {username, password} = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value }); 
  };    

  return (
    <div className="w-96 mx-auto max-w-7xl sm:py-60 lg:py-60">
      <div className="grid gap-y-5">
        <FormInput
          label="Username"
          type="text"
          className="block w-full rounded-md"
          name="username"  
          onChange={handleChange}
          value={username}
        />
        <FormInput
          label="Password"
          type="password"
          className="block w-full rounded-md"
          name="password" 
          onChange={handleChange}
          value={password}
        />
        <button className="w-full rounded-md py-3 bg-gray-600 text-white hover:bg-gray-400" onClick={() => handleLogin(username, password)}>
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