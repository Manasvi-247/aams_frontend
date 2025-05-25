import React from "react";
import {Menu } from "lucide-react";
import {useState} from 'react';

export default function Header({toggleSidebar }) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-lg border-b-4 border-green-500">
  <div className="container mx-auto relative flex items-center justify-center p-4">
    <button
      className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 absolute left-4"
      onClick={toggleSidebar}
      aria-label="Toggle Sidebar"
    >
      <Menu />
    </button>
    <h1 className="text-3xl font-bold text-blue-500 font-mono">FinBuddy</h1>
    <div className="absolute right-4 flex items-center gap-4">
    </div>
  </div>
</header>

  );
}