
import SignIn from './sign-in/page';
import Dashboard from './dashboard/page';
import { auth } from './api/auth/[...nextauth]/auth';

const Home = async () => { 
  
  const data = await auth();   
  if (!data && data === null) {
    return (
      <SignIn /> 
    )
  } else {
    return ( 
      <Dashboard name={data?.user?.name}/>
    )
  }
}

export default Home;
// export default function Home() {
// const { data: session, status  } = useSession();  

//   if (status === "loading") {
//     return <p>Loading...</p>
//   }

//   if (status === "unauthenticated") {
//     return <SignIn />
//   } 
  
//   return ( 
//     <Dashboard />
//   )
// }
