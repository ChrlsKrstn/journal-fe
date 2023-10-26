import SignIn from './sign-in/page';
import Dashboard from './dashboard/page';
import { auth } from './api/auth/[...nextauth]/auth';
import { cookies } from 'next/headers'; 
import { redirect } from 'next/navigation';
const Home = async () => {   
  const data = await auth();
  if (cookies().get('jwt')) {
    return (
      <Dashboard name={data?.user.name}/>
    );
  }
  if (!data && data == null) {
    return (
      <SignIn/> 
    )
  } else {
    redirect("/middleware")
  }
}

export default Home;
