'use client'  
import Nav from '@/components/nav/nav.component'; 

interface user {
  name: string | null | undefined
}

const Dashboard = (params: user) => {   
  return(
    <>
      <Nav name={params.name}/> 
    </> 
  );
};

export default Dashboard;