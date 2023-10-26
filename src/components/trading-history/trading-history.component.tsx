'use client'

const TradingHistory = () => {  

  return (
    <>
      <h1 className="self-center text-2xl font-semibold">History</h1>
      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">
                    Currency Pair
                </th>
                <th className="px-6 py-3">
                    Total Trades
                </th>
                <th className="px-6 py-3">
                    Wins
                </th>
                <th className="px-6 py-3">
                    Loses
                </th>
                <th className="px-6 py-3">
                  Win Rate (by Pair)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              </tr>
            </tbody>
        </table>
      </div>
    </>
  );
}

export default TradingHistory;