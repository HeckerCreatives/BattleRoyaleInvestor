'use client'
import React, { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const maps = [
    '/Game Map v.3.png'
]

const characters = [
    '/Characters.png'
]

const gameplays = [
    '/GAMEPLAY.png',
    '/GAMEPLAY 2.png',
    '/GAMEPLAY 3.png',
    '/GAMEPLAY 4.png',
    '/GAMEPLAY 5.png',
]
 
  

export default function Game() {
    const [active, setActive] = useState('maps')
  return (
    <div id='game' className=' w-full relative h-full flex items-center justify-center ~py-32/48'>
        <img src="/assets/Plate for GAME section.png" alt="bg" className=' absolute h-full w-full' />
        

        <div className=' relative z-20 w-full h-full flex flex-col gap-8 items-center px-4'>

            <img src="/assets/game.png" alt="game" width={150} height={150} className=' ~w-24/36' />

            <p className=' ~text-xs/lg max-w-[900px] text-center text-zinc-100'>Rise of Fearless brings history to life with immersive gameplay. Players embody African warriors inspired by those who triumphed at Adwa, using their knowledge of the land and strategic brilliance to overcome challenges.</p>


            {/* <img src="/assets/Video.png" alt="video" className=' md:mt-8'/> */}

            <iframe className=' w-full aspect-video max-w-[1200px]'  src="https://www.youtube.com/embed/GhXPJRaQ4ng?si=W1efIUmizdSA5RMB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


            <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1540px] w-full h-auto bg-zinc-950 rounded-md border-8 border-amber-400 ~mt-4/32 p-10'>
                <div className=' flex flex-col h-fit ~gap-4/8'>
                    <p onClick={() => setActive('maps')} className={` cursor-pointer ~text-xl/4xl font-bold text-white p-1 rounded-sm ${active === 'maps' && 'bg-gradient-to-r from-amber-700 to-amber-500'}`}>- Maps</p>
                    {active === 'maps' && (
                    <p className=' text-zinc-200 ~text-xs/sm ~py-1/4 ~pl-4/8'>In Rise of Fearless, the maps are inspired by real African places, making the game feel alive and authentic. Fight in locations like the ancient rock churches of Lalibela, the narrow streets of Tunisian medinas, and other stunning spots like savannas, jungles, and deserts.</p>
                    )}

                    <p onClick={() => setActive('characters')} className={` cursor-pointer ~text-xl/4xl font-bold text-white p-1 rounded-sm ${active === 'characters' && 'bg-gradient-to-r from-amber-700 to-amber-500'}`}>- Characters</p>
                        {active === 'characters' && (
                        <p className=' text-zinc-200 ~text-xs/sm ~py-1/4 ~pl-4/8'>In Rise of Fearless, you pick from a wide range of African-inspired characters, each with their own unique look and story. Customize your fighter with traditional outfits, modern hairstyles, and cultural styles to make them your own.</p>
                        )}
                    <p onClick={() => setActive('gameplay')} className={` cursor-pointer ~text-xl/4xl font-bold text-white p-1 rounded-sm ${active === 'gameplay' && 'bg-gradient-to-r from-amber-700 to-amber-500'}`}>- Gameplay</p>
                    {active === 'gameplay' && (
                        <p className=' text-zinc-200 ~text-xs/sm ~py-1/4 ~pl-4/8'>Rise of Fearless is a fast-paced battle royale game set in a beautiful African-inspired world.  Search for weapons, stay ahead of the shrinking play zone, and take down opponents. Rise of Fearless’ gameplay only focuses on multiplayer and not on teamplay as of today. Can you outlast everyone and become the fearless champion?</p>
                        )}

                </div>

                <Carousel className=' w-full h-full mt-2 md:mt-0'>
                <CarouselContent className=' w-full h-full'>
                    {active === 'maps' && (
                        <>
                        {maps.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="w-full aspect-video rounded-md relative">
                            <img
                                src={item} 
                                alt={`Map ${index}`} 
                                className="rounded-md"
                            />
                            </div>
                        </CarouselItem>
                        ))}
                        </>
                    )}

                    {active === 'characters' && (
                        <>
                        {characters.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="w-full aspect-video rounded-md relative">
                            <img
                                src={item} 
                                alt={`Character ${index}`} 
                                className="rounded-md"
                            />
                            </div>
                        </CarouselItem>
                        ))}
                        </>
                    )}

                    {active === 'gameplay' && (
                        <>
                        {gameplays.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="w-full aspect-video rounded-md relative">
                            <img
                                src={item} 
                                alt={`Gameplay ${index}`} 
                                className="rounded-md"
                            />
                            </div>
                        </CarouselItem>
                        ))}
                        </>
                    )}
                    
                    

                  
                  
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
                </Carousel>


               

            </div>

            <div className=' w-full flex items-center justify-center ~mt-2/12'>
                        <a href='https://rof.game/' target='_blank' className=' relative drop-shadow-lg flex items-center justify-center'>
                            <img src="/assets/BUTTON.png" alt="button" width={500} height={500} className=' ~w-72/96'/>
                            <p className=' ~text-sm/xl font-bold text-white absolute'>TRY RISE OF FEARLESS NOW</p>
                        </a>

            </div>

        </div>

    </div>
  )
}
