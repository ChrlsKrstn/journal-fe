import { cookies } from 'next/headers'
import { auth } from '../api/auth/[...nextauth]/auth';
import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
export async function GET(request: Request) {
  const cookieStore = cookies();    
  const data = await auth(); 

  await fetch("https://localhost:7090/User/setToken", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data?.user),
  })
  .then(res => res.json())
  .then((token) => {
    if (token != undefined) {
      cookieStore.set("jwt", token); 
      return redirect("/");
    }
  }); 

  return NextResponse.redirect("http://localhost:3000/");
}