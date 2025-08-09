import { useState } from 'react'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'


function App() {

  return (
    <>
     
       <Header />
      <Hero />
      <Stats />
      <Services />
    </>
  )
}

export default App
