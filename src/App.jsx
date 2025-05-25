import React, { useState } from "react";
import Header from "./assets/components/Header";
import Sidebar from "./assets/components/SideBar";
import TrendingTags from "./assets/components/TrendingTags";
import TickerBar from "./assets/components/Tickerbar";
import Footer from "./assets/components/Footer";
import TradingViewWidget from "./assets/components/TradingViewWidget";

export default function App() {
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
        <TrendingTags />
        <TradingViewWidget/>
      </main>
       <Footer />
    </div>
  );
}
