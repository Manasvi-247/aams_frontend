import React, { useState, useContext, useEffect } from "react";
import { SentimentContext } from "../../App"; // Adjust the import path as needed

const sentimentMap = {
  "Strong Buy": {
    colorClass: "text-green-800 dark:text-green-300",
    borderClass: "border-green-600",
  },
  "Buy": {
    colorClass: "text-green-600 dark:text-green-400",
    borderClass: "border-green-500",
  },
  "Hold": {
    colorClass: "text-yellow-700 dark:text-yellow-400",
    borderClass: "border-yellow-500",
  },
  "Sell": {
    colorClass: "text-red-600 dark:text-red-400",
    borderClass: "border-red-500",
  },
  "Strong Sell": {
    colorClass: "text-red-800 dark:text-red-300",
    borderClass: "border-red-600",
  },
};

export default function FinalSentiment() {
  const [sentiment, setSentiment] = useState("");
  const [reason, setReason] = useState("");
  const { response } = useContext(SentimentContext);

  useEffect(() => {
    if (response && response.analysis) {
      const data = response.analysis;
      // Extract sentiment
      const recommendationMatch = data.match(/<RECOMMENDATION>(.*?)<\/RECOMMENDATION>/);
      setSentiment(recommendationMatch?.[1]?.trim() || "Hold");

      // Extract reason/explanation
      const explanationMatch = data.match(/<Explanation>(.*?)<\/Explanation>/);
      setReason(explanationMatch?.[1]?.trim() || "");
    }
  }, [response]);

  const { colorClass, borderClass } = sentimentMap[sentiment] || {
    colorClass: "text-gray-700 dark:text-gray-300",
    borderClass: "border-gray-400",
  };

  return (
    <section className={`max-w-md mx-auto mt-8 p-6 rounded-2xl border-2 ${borderClass} bg-gray-50 dark:bg-gray-800 shadow`}>
      <h2 className={`text-3xl font-bold mb-2 flex items-center justify-center gap-2 ${colorClass}`}>
        {sentiment}
      </h2>
      <p className="text-base text-gray-700 dark:text-gray-200 mt-2 font-[cursive] text-center">
        {reason}
      </p>
    </section>
  );
}
