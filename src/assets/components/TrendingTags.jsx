import React from "react";
import { motion } from "framer-motion";
import { Tailspin } from 'ldrs/react'
import 'ldrs/react/Tailspin.css'


export default function TrendingTags() {
  const tags = ["ITC", "RELIANCE", "HDFCBANK", "YESBANK", "IRCTC"];

  return (
    <div className="mt-6">
      <p className="mb-2 font-semibold">What's Trending:</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag, idx) => (
          <motion.span
            key={tag}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold cursor-pointer"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
