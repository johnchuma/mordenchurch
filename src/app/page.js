"use client"

import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Organisations from './components/organisations'
import Software from './components/software'
import Features from './components/features'
import GetStarted from './components/get_started'
import Testimonials from './components/testimonials'
import Pricing from './components/pricing'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className=' overflow-x-hidden '>
    <Navbar/>
    <Hero/>
    <Organisations/>
    <Software/>
    <div id="features">
    <Features/>
    </div>
    <GetStarted/>
    <div id="testimonials">
    <Testimonials/>
      </div>
      <div id="pricings">
      <Pricing/> 
      </div>
    <Footer/>
  </main>
  )
}
