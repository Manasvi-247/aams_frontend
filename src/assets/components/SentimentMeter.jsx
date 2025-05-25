import React, { useState ,useEffect} from "react";
import Papa from "papaparse";

export default function SentimentMeter() {
  const [csvData, setCsvData] = useState([]); // flattened [{name, exchange}]
  const [searchQuery, setSearchQuery] = useState("");
  const [csvLoaded, setCsvLoaded] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const[sentimentScore, setScore]=useState(0);

    // useEffect(() => {
    //   fetch('http://localhost:3000/news_sentiment/')
    //     .then(res => res.json())
    //     .then(newsObj => {
    //       // Convert the news object to an array
          
    //       setScore(Math.round(newsObj)); // Set state with the array of news objects
    //       // console.log(newsObj);
    //     });
    // }, []);

  useEffect(() => {
  fetch("/stockName.csv")
    .then(res => res.text())
    .then(text => {
      Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const flat = [];
          results.data.forEach(row => {
           // console.log("Row from CSV:", row);
            if (row.NSE && row.NSE.trim()) {
              flat.push({ name: row.NSE.trim(), exchange: "NSE", symbol: row["NSE.SYMBOL"]?.trim() || "" });
            }
            if (row.BSE && row.BSE.trim()) {
              flat.push({ name: row.BSE.trim(), exchange: "BSE", symbol: row["BSE.SYMBOL"]?.trim() || "" });
            }
          });
          setCsvData(flat);
          setCsvLoaded(true);
        },
      });
    });
}, []);

  // Parse CSV on file upload
  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   Papa.parse(file, {
  //     header: true,
  //     skipEmptyLines: true,
  //     complete: (results) => {
  //       const flat = [];
  //       results.data.forEach(row => {
  //         if (row.NSE && row.NSE.trim()) {
  //           flat.push({ name: row.NSE.trim(), exchange: "NSE",
  //             symbol: row["NSE.SYMBOL"]?.trim() || ""
  //           });
  //         }
  //         if (row.BSE && row.BSE.trim()) {
  //           flat.push({ name: row.BSE.trim(), exchange: "BSE",
  //             symbol: row["BSE.SYMBOL"]?.trim() || ""
  //            });
  //         }
  //       });
  //       setCsvData(flat);
  //       setCsvLoaded(true);
  //     },
  //   });
  // };

  // Filtered results for search
  const filteredResults = searchQuery
    ? csvData.filter(entry =>
        entry.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const getSentimentLabel = (score) => {
    if (score < 30) return "😨 Fear";
    if (score < 60) return "😐 Neutral";
    return "😎 Greed";
  };

  const getSentimentColor = (score) => {
    if (score < 30) return "text-red-600";
    if (score < 60) return "text-yellow-600";
    return "text-green-600";
  };

  function handleSelect(entry) {
    setSelectedCompany(entry);
    setSearchQuery(entry.name); 
    console.log("Selected company:", entry.name, entry.symbol, entry.exchange);
    console.log("symbol is "+entry.symbol);
    const url = new URL(`http://192.168.2.253:8000/stock/?company=${entry.name}&symbol=${entry.symbol}`);
  // url.searchParams.append("name", entry.name);
  // url.searchParams.append("symbol", entry.symbol);

  fetch(url.toString())
    .then((res) => res.json())
    .then((response) => {
      console.log("Backend response:", response.news_sentiment);
      setScore(Math.round(response.news_sentiment));

    })
    .catch((err) => {
      console.error("Error sending company data:", err);
    });
}

  

  return (
    <section className="mt-8 max-w-md mx-auto text-center">

      <div className="max-w-2xl mx-auto">
        {/* <div className="mb-4 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="block w-full sm:w-auto"
          />
          {csvLoaded && (
            <span className="text-green-600 font-semibold">CSV loaded!</span>
          )}
        </div> */}
        <div className="relative">
          <input
            type="text"
            placeholder="Type a Company Name to Search"
            value={selectedCompany ? selectedCompany.name : searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value);
              setSelectedCompany(null); // Reset selection on typing
            }}
            disabled={!csvLoaded}
            className="w-full max-w-4xl p-4 pl-12 rounded-full border-2 border-green-500 hover:border-blue-500 dark:border-green-500 dark:hover:border-blue-500 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 transition-colors duration-300"


          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500">
            🔍
          </span>
          {/* Search Results Dropdown */}
          {searchQuery && !selectedCompany && filteredResults.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-700 rounded shadow max-h-60 overflow-y-auto z-10 text-left">
              {filteredResults.map((entry, idx) => (
                <div
                  key={idx}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center"
                  onClick={() => {
                    handleSelect(entry)
                  }}
                >
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold mr-2
                    ${entry.exchange === "NSE"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"}`}>
                    {entry.exchange}
                  </span>
                  {entry.name}
                </div>
              ))}
            </div>
          )}
          {searchQuery && !selectedCompany && filteredResults.length === 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-700 rounded shadow z-10 p-2 text-gray-500 dark:text-gray-300">
              No results found.
            </div>
          )}
        </div>
        {/* Show selected company below if you want */}
        {/* {selectedCompany && (
          <div className="mt-2 text-left text-sm text-gray-700 dark:text-gray-200">
            Selected: <span className="font-semibold">{selectedCompany.name}</span> <span className="ml-2 px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs">{selectedCompany.exchange}</span>
          </div>
        )} */}
      </div>
<br></br>
      <h3 className="text-xl font-semibold mb-2">Market Sentiment Meter</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-[cursive]">(Fear & Greed Index)</p>
      <div className="relative w-64 h-64 mx-auto">
        <svg viewBox="0 0 100 50" className="w-full h-full">
          <path d="M10 50 A40 40 0 0 1 90 50" fill="none" stroke="#e5e7eb" strokeWidth="10" />
          <path
            d="M10 50 A40 40 0 0 1 90 50"
            fill="none"
            stroke={
              sentimentScore < 30
                ? "#dc2626"
                : sentimentScore < 60
                ? "#facc15"
                : "#16a34a"
            }
            strokeWidth="10"
            strokeDasharray="125.6"
            strokeDashoffset={125.6 - ((sentimentScore || 0) / 100) * 125.6}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-2xl font-bold mb-35 mr-6  ${getSentimentColor(sentimentScore)}`}>
            {getSentimentLabel(sentimentScore)}
          </span>
          <span className="text-sm mt-1 text-gray-500 dark:text-gray-400">{sentimentScore}/100</span>
        </div>
      </div>
    </section>
  );
}
