import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST(request: Request) {
  const reqBody = await request.json();
  const cookieStore = cookies(); 
  try { 
    const res = await fetch("https://localhost:7090/Transaction/" + reqBody.end_point, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + cookieStore.get("jwt")?.value,
      },
      body: JSON.stringify(reqBody.formData),
    })
    .then(res => res.json());
    return new NextResponse(JSON.stringify(res), {
      status: 200,
    });
  } catch {
    return new NextResponse("Error", {
      status: 401,
    });
  }  
}; 