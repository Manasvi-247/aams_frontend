import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TickerBar.css';


const companyNames = [
  'tata steel',
  'icici bank',
  'titan',
  'bajaj finance',
  'ultratech cement',
  'reliance industries',
  'itc',
  'hdfc bank'
];

const TickerBar = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const results = await Promise.all(
          companyNames.map(async (name) => {
            const options = {
              method: 'GET',
              url: 'https://indian-stock-exchange-api2.p.rapidapi.com/stock',
              params: { name },
              headers: {
                'x-rapidapi-key': "39d1723794msh1f9fae095d62550p1f4e93jsn9ad8b5983ae9",
                'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com'
              }
            };
            const response = await axios.request(options);
            return {
              name: response.data.companyName || name,
              nsePrice: response.data.currentPrice?.NSE ?? 'N/A'
            };
          })
        );
        setPrices(results);
      } catch (err) {
        setError('Failed to fetch NSE prices.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  if (loading) return <div className="ticker-bar">Loading..ABC</div>;
  if (error) return <div className="ticker-bar">{error}</div>;
  console.log(error);
  console.log(loading+"it is loading");

  // Duplicate items for seamless looping
  const tickerItems = [...prices, ...prices];

  return (
    <div className="ticker-bar">
      <div className="ticker-marquee">
        {tickerItems.map((company, idx) => (
          <div className="ticker-item" key={company.name + idx}>
            <span className="ticker-symbol">{company.name}</span>
            <span className="ticker-price">
              {company.nsePrice !== 'N/A' ? `₹${company.nsePrice}` : 'N/A'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
