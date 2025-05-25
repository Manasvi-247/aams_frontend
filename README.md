# FinBuddy

**FinBuddy** is a modern, interactive stock market dashboard for Indian equities.  
It provides real-time price tickers, a company search powered by CSV data, and a dynamic market sentiment meter (Fear & Greed Index) — all in a beautiful, responsive UI.

---

## 🚀 Features

- **Live Stock Ticker:**  
  A moving, auto-scrolling ticker bar displaying real-time prices for top Indian stocks.

- **Intelligent Company Search:**  
  Lightning-fast, CSV-powered search with exchange badges and instant selection.

- **Sentiment Meter:**  
  Visualizes the current market sentiment with a dynamic, color-coded gauge (Fear & Greed Index).

- **TradingView Integration:**  
  Embedded TradingView hotlists and charts for deeper market insights.

- **Responsive & Accessible:**  
  Works beautifully on desktop and mobile, with accessible forms and navigation.

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
- git clone https://github.com/Manasvi-247/aams_frontend.git 
- cd finBuddy
- npm install

---
### Project Structure
```
aams_frontend/
├── public/
│   └── stockName.csv                  # Static CSV file accessible at runtime
├── src/
│   ├── assets/
│   │   └── components/
│   │       ├── TickerBar.jsx          # Stock ticker component
│   │       ├── TickerBar.css          # TickerBar styles
│   │       ├── Header.jsx             # Top header/navigation bar
│   │       ├── Footer.jsx             # Footer component
│   │       ├── SideBar.jsx            # Sidebar for navigation or filters
│   │       ├── TradingViewWidget.jsx  # Embeds TradingView market widget
│   │       ├── SentimentMeter.jsx     # Shows sentiment indicator
│   │       ├── NewsCards.jsx          # Displays stock news articles
│   │       ├── TrendingTags.jsx       # Displays trending stock tags
│
│   ├── App.jsx                        # Main application component
│   ├── main.jsx                       # React app entry point
│   └── index.css                      # Global CSS
├── .gitignore                         # Ignore node_modules, build artifacts, etc.
├── package.json                       # Project dependencies and scripts
├── vite.config.js                     # Vite configuration
└── README.md                          # Project overview/documentation
```
---

## 🧩 Usage

- **Search for a company:**  
  Start typing in the search bar to filter companies. Click a result to select.

- **View live prices:**  
  Watch the ticker for real-time updates.

- **Check market sentiment:**  
  The sentiment meter shows the current market mood.

---

## ⚙️ Configuration

- **API Keys:**  
  This project uses [RapidAPI](https://rapidapi.com/) for stock data.  

- **CSV Data:**  
  Default company list is in `public/stockName.csv`. You can upload your own.

---

## 🙏 Acknowledgements

- [TradingView](https://www.tradingview.com/)
- [RapidAPI](https://rapidapi.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PapaParse](https://www.papaparse.com/)

---

> Made with ❤️ by Team Byte Me  
> FinBuddy — Smarter Markets, Beautifully Simple.




