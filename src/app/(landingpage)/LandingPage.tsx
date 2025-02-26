import Creator from '@/components/landingpage/Creator'
import Footer from '@/components/landingpage/Footer'
import Game from '@/components/landingpage/Game'
import HeroSection from '@/components/landingpage/Header'
import Opportunity from '@/components/landingpage/Opportunity'
import Rof from '@/components/landingpage/Rof'
import React from 'react'

export default function LandingPage() {
  return (
   <div className=" w-full h-full flex flex-col items-center overflow-x-hidden"
       style={{ backgroundImage: "url('/assets/BG Pattern Solid.png')" , backgroundSize:'contain', backgroundRepeat:'repeat', backgroundPosition:'bottom'}}
       >
         
        <HeroSection/>
        
        <Rof/>
        <Game/>
        <Opportunity/>
        <Creator/>
        <Footer/>
    </div>
  )
}
