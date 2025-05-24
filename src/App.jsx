import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import NewsCard from "./assets/components/NewsCard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <NewsCard/>
      <Footer />
    </>
  )
}

export default App
