import React from "react";
import { useEffect, useState } from "react";

export default function StockData() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/stock_data/")
      .then((res) => res.json())
      .then((newsObj) => {
        

        setStockData(newsObj); 
      });
  }, []);

  return (
    <>
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow p-6 space-y-4 mt-8">
        <h2 className="text-2xl font-bold mb-2 text-center">
          {stockData.CompanyName}
        </h2>
        <p className="w-full max-w-7xl mx-auto px-4 text-gray-600 dark:text-gray-300 mt-2 whitespace-pre-line leading-relaxed text-justify">
          {stockData.Description}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-700 dark:text-gray-300">
          <tbody>
            {/* Pricing Section */}
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td colSpan="2" className="px-4 py-3 font-bold text-lg">
                Market Data
              </td>
            </tr>
            <TableRow
              label="BSE Price"
              value={`₹${stockData.CurrentPriceBSE}`}
            />
            <TableRow
              label="NSE Price"
              value={`₹${stockData.CurrentPriceNSE}`}
            />
            <TableRow
              label="52 Week High"
              value={`₹${stockData["52weekHigh"]}`}
            />
            <TableRow
              label="52 Week Low"
              value={`₹${stockData["52weekLow"]}`}
            />

            {/* Valuation Metrics */}
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td colSpan="2" className="px-4 py-3 font-bold text-lg">
                Valuation Ratios
              </td>
            </tr>
            <TableRow
              label="Price-to-Book (P/B)"
              value={stockData.priceToBookValueRatio}
            />
            <TableRow
              label="Price-to-Earnings (P/E)"
              value={stockData.priceToEarningsValueRatio}
            />
            <TableRow
              label="Market Cap"
              value={
                stockData.marketCap !== undefined &&
                stockData.marketCap !== null
                  ? `₹${stockData.marketCap.toLocaleString()} Cr`
                  : "N/A"
              }
            />

            {/* Profitability */}
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td colSpan="2" className="px-4 py-3 font-bold text-lg">
                Profitability
              </td>
            </tr>
            <TableRow
              label="ROE (5Y Avg)"
              value={`${stockData.returnOnAverageEquity5YearAverage}%`}
            />
            <TableRow
              label="ROE (TTM)"
              value={`${stockData.returnOnAverageEquityTrailing12Month}%`}
            />
            <TableRow
              label="Net Margin (5Y Avg)"
              value={`${stockData.netProfitMargin5YearAverage}%`}
            />
            <TableRow
              label="Net Margin (TTM)"
              value={`${stockData.netProfitMarginPercentTrailing12Month}%`}
            />

            {/* Debt & Dividends */}
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td colSpan="2" className="px-4 py-3 font-bold text-lg">
                Capital Structure
              </td>
            </tr>
            <TableRow
              label="LT Debt/Equity"
              value={stockData.ltDebtPerEquityMostRecentFiscalYear}
            />
            <TableRow
              label="Dividend Yield"
              value={`${stockData.dividendYieldIndicatedAnnualDividend}%`}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}
function TableRow({ label, value }) {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      <th className="px-4 py-3 text-left font-medium w-1/3">{label}</th>
      <td className="px-4 py-3 text-right">{value}</td>
    </tr>
  );
}
