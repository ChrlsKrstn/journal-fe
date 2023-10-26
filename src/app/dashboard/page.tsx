import Nav from '@/components/nav/nav.component'; 
import TradingHistory from '@/components/trading-history/trading-history.component';
import Transaction from '@/components/transaction/transaction.component';
import TradingEntries from '@/components/trading-entries/trading-entries.component';
import {cookies} from 'next/headers'
interface user {
  name: string | null | undefined
} 
const Dashboard = (params: user) => {
  
  const destroyCookie = async () => {
    'use server'
    cookies().delete('jwt')
  }

  return(
    <>
      <Nav name={params.name} destroyCookie={destroyCookie}/> 
      <div className='my-16'>
        <div className="flex">
          <div className="grid grid-cols-9 flex-grow">
            <div className="col-span-3 p-8">
              Sumary
            </div>
            <div className="flex flex-col col-span-5">
              <div className="flex-grow p-8">
                <TradingHistory />
              </div>
              <div className="flex-grow p-8">
                <TradingEntries />
              </div>
              <div className="flex-grow p-8">
                <Transaction />
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  );
};

export default Dashboard;