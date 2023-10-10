'use client'  
import Nav from '@/components/nav/nav.component'; 

interface user {
  name: string | null | undefined
}

const Dashboard = (params: user) => {   
  return(
    <>
      <Nav name={params.name}/> 
      <div className='my-16'>
        <div className="flex">
          <div className="grid grid-cols-9 flex-grow">
            <div className="col-span-1 bg-gray-100">
              Sumary
            </div>
            <div className="flex flex-col col-span-8">
              <div className="flex-grow p-8">
                History
              </div>
              <div className="flex-grow p-8">
                Entries
              </div>
              <div className="flex-grow p-8">
                Deposit / Withdraw
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  );
};

export default Dashboard;