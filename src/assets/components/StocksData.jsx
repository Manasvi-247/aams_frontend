import React from "react";
import { useEffect, useState,useContext } from "react";
import { SentimentContext } from "../../App";

export default function StockData() {
  const [stockData, setStockData] = useState([]);
  const{response,setresponse}=useContext(SentimentContext);

  // useEffect(() => {
  //   fetch("http://localhost:3000/stock_data/")
  //     .then((res) => res.json())
  //     .then((newsObj) => {
        

  //       setStockData(newsObj); 
  //     });
  // }, []);

  return (
    <>
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow p-6 space-y-4 mt-8">
        <h2 className="text-2xl font-bold mb-2 text-center">
          {(response != null)?response.stock_data.CompanyName:<h1>loading....</h1>}
        </h2>
        <p className="w-full max-w-7xl mx-auto px-4 text-gray-600 dark:text-gray-300 mt-2 whitespace-pre-line leading-relaxed text-justify">
          {(response != null)?response.stock_data.Description:<h1>loading....</h1>}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-700 dark:text-gray-300">
          <tbody>
            {/* Pricing Section */}
            <tr
  className="bg-gray-50 dark:bg-gray-800 transition duration-300 cursor-pointer"
  style={{ transitionProperty: "box-shadow" }}
  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 8px 4px #22c55e')}
  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
>
              <td colSpan="2" className="px-4 py-3 font-bold text-lg">
                Market Data
              </td>
            </tr>
            <TableRow
              label="BSE Price"
              value={`₹${ (response != null)?response.stock_data.CurrentPriceBSE:<h1>loading....</h1>}`}
            />
            <TableRow
              label="NSE Price"
              value={`₹${(response != null)?response.stock_data.CurrentPriceNSE:<h1>loading....</h1>}`}
            />
            <TableRow
              label="52 Week High"
              value={`₹${  (response != null)?response.stock_data["52weekHigh"]:<h1>loading....</h1>}`}
            />
            <TableRow
              label="52 Week Low"
              value={`₹${(response != null)?response.stock_data["52weekLow"]:<h1>loading....</h1>}`}
            />

            {/* Valuation Metrics */}
            <tr className="bg-gray-50 dark:bg-gray-800 transition duration-300 cursor-pointer"
  style={{ transitionProperty: "box-shadow" }}
  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 8px 4px #22c55e')}
  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
              <td colSpan="2" className="px-4 py-3 font-bold text-lg">
                Valuation Ratios
              </td>
            </tr>
            <TableRow
              label="Price-to-Book (P/B)"
              value={(response != null)?response.stock_data.priceToBookValueRatio:<h1>loading....</h1>}
            />
            <TableRow
              label="Price-to-Earnings (P/E)"
              value={ (response != null)?response.stock_data.priceToEarningsValueRatio:<h1>loading....</h1>}
            />
            <TableRow
              label="Market Cap"
              value={
                stockData.marketCap !== undefined &&
                stockData.marketCap !== null
                  ? `₹${ (response != null)?response.stock_data.marketCap.toLocaleString():<h1>loading....</h1>} Cr`
                  : "N/A"
              }
            />

            {/* Profitability */}
            <tr className="bg-gray-50 dark:bg-gray-800 transition duration-300 cursor-pointer"
  style={{ transitionProperty: "box-shadow" }}
  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 8px 4px #22c55e')}
  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
              <td colSpan="2" className="px-4 py-3 font-bold text-lg">
                Profitability
              </td>
            </tr>
            <TableRow
              label="ROE (5Y Avg)"
              value={`${(response != null)?response.stock_data.returnOnAverageEquity5YearAverage:<h1>loading....</h1>}%`}
            />
            <TableRow
              label="ROE (TTM)"
              value={`${(response != null)?response.stock_data.returnOnAverageEquityTrailing12Month:<h1>loading....</h1>}%`}
            />
            <TableRow
              label="Net Margin (5Y Avg)"
              value={`${(response != null)?response.stock_data.netProfitMargin5YearAverage:<h1>loading....</h1>}%`}
            />
            <TableRow
              label="Net Margin (TTM)"
              value={`${ (response != null)?response.stock_data.netProfitMarginPercentTrailing12Month:<h1>loading....</h1>}%`}
            />

            {/* Debt & Dividends */}
            <tr className="bg-gray-50 dark:bg-gray-800 transition duration-300 cursor-pointer"
  style={{ transitionProperty: "box-shadow" }}
  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 8px 4px #22c55e')}
  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
              <td colSpan="2" className="px-4 py-3 font-bold text-lg">
                Capital Structure
              </td>
            </tr>
            <TableRow
              label="LT Debt/Equity"
              value={ (response != null)?response.stock_data.ltDebtPerEquityMostRecentFiscalYear:<h1>loading....</h1>}
            />
            <TableRow
              label="Dividend Yield"
              value={`${(response != null)?response.stock_data.dividendYieldIndicatedAnnualDividend:<h1>loading....</h1>}%`}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}
function TableRow({ label, value }) {
  return (
    <tr
      className="border-b border-gray-200 dark:border-gray-700 transition duration-300 cursor-pointer"
      style={{
        transitionProperty: 'box-shadow',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = '0 0 8px 2px rgba(12, 105, 255, 0.5)') 
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      <th className="px-4 py-3 text-left font-medium w-1/3">{label}</th>
      <td className="px-4 py-3 text-right">{value}</td>
    </tr>
  );
}


