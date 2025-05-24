import React from "react";
import { motion } from "framer-motion";

export default function NewsCards() {
  const newsCategories = ["News 1", "News 2", "News 3",];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Curated News</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Here are all the latest shared market list.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsCategories.map((title, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <ul className="text-sm space-y-2">
              <li>
                <p className="font-medium">Link</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Body</p>
              </li>
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
