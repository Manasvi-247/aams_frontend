import React from "react";
import { Sun, Moon, Menu,Search } from "lucide-react";
import {useState} from 'react';

export default function Header({ darkMode, setDarkMode, toggleSidebar }) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <Menu />
          </button>
          <h1 className="text-2xl font-bold color-blue-500">Finology Ticker</h1>
        </div>
        <div className="flex items-center gap-4">
          {/* <button
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setDarkMode(prev => !prev)}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button> */}
         
        
        </div>
      </div>
    </header>
  );
}
