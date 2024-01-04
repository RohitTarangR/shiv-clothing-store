import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Product1 from './Components/Product1'
import NewArrival from './Components/NewArrival'
import Banner from './Components/Banner'
import SmBanner from './Components/SmBanner'
import Banner3 from './Components/Banner3'
import NewsLetter from './Components/NewsLetter'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    
    <Navbar />
    <Hero />
    <Features />
    <Product1 />
    <Banner />
    <NewArrival />
    <SmBanner />
    <Banner3 />
    <NewsLetter />
    <Footer />

    
    </>
  )
}

export default App


