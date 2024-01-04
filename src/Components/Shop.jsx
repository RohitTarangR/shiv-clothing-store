import React from 'react'
import Navbar from './Navbar'
import ShopContent from './ShopContent'
import NewsLetter from './NewsLetter'
import Footer from './Footer'

import "../assets/style.css";

export default function Shop() {
  return (
    <>
    <Navbar />
    <ShopContent />
    <NewsLetter />
    <Footer />
    </>
  )
}
