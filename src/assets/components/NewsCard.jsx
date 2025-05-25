import React from "react";
import { motion } from "framer-motion";
import { useEffect,useState } from "react";
export default function NewsCards() {
 const [newsCategories, setNewsCategories] = useState([]);

   useEffect(() => {
    fetch('http://localhost:3000/news/')
      .then(res => res.json())
      .then(newsObj => {
        // Convert the news object to an array
        const newsArr = Object.values(newsObj);
        setNewsCategories(newsArr); // Set state with the array of news objects
      });
  }, []);




  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Curated News</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Get all the latest share market and India stock market news and updates.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsCategories.map((news, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03,boxShadow: "0 2px 10px #22c55e" }}
            transition={{ type: "tween", stiffness: 300 , duration:0.6 }}
           className="p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow flex flex-col justify-between"

          >
            <h3 className="text-lg font-semibold mb-3">{news.title}</h3>
            <ul className="text-sm space-y-2">
              <li>
                
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{news.body}</p>
                <button onClick={() => window.location.href = `${news.link}`} className="self-start px-5 py-2 mt-auto rounded-lg bg-blue-100 text-blue-700 font-medium shadow-sm hover:bg-blue-200 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">Read More</button>
              </li>
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
 );
}