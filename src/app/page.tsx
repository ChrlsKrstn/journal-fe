import SignIn from './sign-in/page';
import Dashboard from './dashboard/page';
import { auth } from './api/auth/[...nextauth]/auth';
import { cookies } from 'next/headers';

const setCookie = async (data: string) => {
  'use server'
  cookies().set('jwt', data);
}
 
const Home = async () => { 
  const data = await auth();
  if (!data && data === null) {
    return (
      <SignIn /> 
    )
  } else {
    
    //setCookie(data?.user?.token);
    return ( 
      <Dashboard name={data?.user?.name}/>
    )
  }
}

export default Home;
