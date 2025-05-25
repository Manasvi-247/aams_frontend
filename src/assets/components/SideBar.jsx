import React from "react";
import { motion } from "framer-motion";

export default function Sidebar({ sidebarOpen }) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: sidebarOpen ? 0 : "-100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg z-40"
      style={{ pointerEvents: sidebarOpen ? "auto" : "none" }}
    >
      <div className="p-4 space-y-4">
        {[
          "Home",
          "Market",
          "IPO",
          "Screener",
          "Bundles",
          "Super Investors",
          "Sector",
          "Discover"
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="block px-2 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {item}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
