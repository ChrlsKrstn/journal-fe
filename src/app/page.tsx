'use client'
import SignIn from './sign-in/page';
import Dashboard from './dashboard/page';
import { useSession, signIn, signOut } from 'next-auth/react'
export default function Home() {

  const { data: session, status  } = useSession();  

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <SignIn />
  } 
  
  return ( 
    <Dashboard />
  )
}
