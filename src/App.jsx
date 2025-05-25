import React, { useState,createContext } from "react";
import Header from "./assets/components/Header";
import Sidebar from "./assets/components/SideBar";
import TrendingTags from "./assets/components/TrendingTags";
import TickerBar from "./assets/components/Tickerbar";
import Footer from "./assets/components/Footer";
import TradingViewWidget from "./assets/components/TradingViewWidget";
import NewsCards from "./assets/components/NewsCard";
import SentimentMeter from "./assets/components/SentimentMeter";
import StockData from "./assets/components/StocksData";

export const SentimentContext = createContext(null);
export default function App() {
  const[response,setresponse]=useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((open) => !open);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-gray-900 min-h-screen"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} toggleSidebar={toggleSidebar} />
      <TickerBar/>
      <Sidebar sidebarOpen={sidebarOpen} />
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        />
      )}
      <main className="container mx-auto px-4 pt-6 pb-16">
        <SentimentContext.Provider value={{response,setresponse}}>
         <SentimentMeter/>
         <StockData/>
        <TrendingTags />
         <NewsCards/>
        <TradingViewWidget/>
       <Footer />
       </SentimentContext.Provider>
         </main>
       
    </div>
  );
}
