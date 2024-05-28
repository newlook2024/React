import { useState } from "react"
import Header from "./components/Header"
import HeroSection from "./components/Hero"
import Start from "./components/Start"
import Partners from "./components/Partners"
import Time from "./components/Time"
import Swipper from "./components/Swipper"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Start/>
      <Partners/>
      <Time/>
      <Swipper/>  
      <Footer/>
    </>
  )
}

export default App