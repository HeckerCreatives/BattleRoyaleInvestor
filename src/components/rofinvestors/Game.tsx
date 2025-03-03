'use client'
import React, { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { motion, AnimatePresence } from "framer-motion"

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

const tabs = [
    {
      id: "maps",
      title: "Maps",
      content:
        "In Rise of Fearless, the maps are inspired by real African places, making the game feel alive and authentic. Fight in locations like the ancient rock churches of Lalibela, the narrow streets of Tunisian medinas, and other stunning spots like savannas, jungles, and deserts.",
    },
    {
      id: "characters",
      title: "Characters",
      content:
        "In Rise of Fearless, you pick from a wide range of African-inspired characters, each with their own unique look and story. Customize your fighter with traditional outfits, modern hairstyles, and cultural styles to make them your own.",
    },
    {
      id: "gameplay",
      title: "Gameplay",
      content:
        "Rise of Fearless is a fast-paced battle royale game set in a beautiful African-inspired world. Search for weapons, stay ahead of the shrinking play zone, and take down opponents. Rise of Fearless' gameplay only focuses on multiplayer and not on teamplay as of today. Can you outlast everyone and become the fearless champion?",
    },
  ]
 
  

export default function Game() {
    const [active, setActive] = useState('maps')
  return (
    <div id='game' className=' w-full relative h-full flex items-center justify-center ~py-32/48'>
        <img src="/assets/Plate for GAME section.png" alt="bg" className=' absolute h-full w-full' />
        

        <div className=' relative z-20 w-full h-full flex flex-col gap-8 items-center px-4'>

            <motion.img src="/assets/game.png" alt="game" width={150} height={150} 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px 0px" }}
             transition={{
                 type: "spring",
                 stiffness: 30,
                 damping: 10,
                 mass: 1,
                 delay: .0
             }}
            className=' ~w-24/36' />

            <motion.p 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px 0px" }}
             transition={{
                 type: "spring",
                 stiffness: 30,
                 damping: 10,
                 mass: 1,
                 delay: .2
             }}
            className=' ~text-sm/xl max-w-[900px] text-center text-zinc-50'>Rise of Fearless brings history to life with immersive gameplay. Players embody African warriors inspired by those who triumphed at Adwa, using their knowledge of the land and strategic brilliance to overcome challenges.</motion.p>


            {/* <img src="/assets/Video.png" alt="video" className=' md:mt-8'/> */}

            {/* <motion.iframe 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px 0px" }}
             transition={{
                 type: "spring",
                 stiffness: 30,
                 damping: 10,
                 mass: 1,
                 delay: .2
             }}
            className=' w-full aspect-video max-w-[1200px]'  src="https://youtube/izq3nh5TfIw?si=Lkh3IkVfR2gneBBC" title="Rise of Fearless" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></motion.iframe> */}

            <motion.iframe  
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px 0px" }}
            transition={{
                type: "spring",
                stiffness: 30,
                damping: 10,
                mass: 1,
                delay: .2
            }}
            className=' w-full aspect-video max-w-[1200px]' src="https://www.youtube.com/embed/izq3nh5TfIw?si=Lkh3IkVfR2gneBBC" title="Rise of Fearless" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></motion.iframe>


            <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px 0px" }}
             transition={{
                 type: "spring",
                 stiffness: 30,
                 damping: 10,
                 mass: 1,
                 delay: 0
             }}
            className=' grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1540px] w-full h-auto bg-zinc-950 rounded-md border-8 border-amber-400 ~mt-4/32 p-10'>
                <div className=' transition-all duration-500 flex flex-col h-fit ~gap-4/8'>
                {tabs.map((tab) => (
                        <div key={tab.id}>
                        <button
                            onClick={() => setActive(tab.id)}
                            className={`cursor-pointer text-xl md:text-2xl lg:text-4xl font-bold text-white p-1 rounded-sm w-full text-left ${
                            active === tab.id ? "bg-gradient-to-r from-amber-700 to-amber-500" : ""
                            }`}
                        >
                            - {tab.title}
                        </button>

                        <AnimatePresence mode="wait">
                            {active === tab.id && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, y: -10 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <motion.p
                                className="text-zinc-200 text-sm md:text-base lg:text-xl py-1 md:py-2 lg:py-4 pl-4 md:pl-6 lg:pl-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                >
                                {tab.content}
                                </motion.p>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </div>
                    ))}

                </div>

                <Carousel className=' w-full h-full mt-2 md:mt-0'>
                <CarouselContent className=' w-full h-full'>
                    {/* {active === 'maps' && (
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
                    )} */}

                    <AnimatePresence mode="wait">
                    <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full ml-4"
                    >
                    <CarouselContent className="w-full h-full ">
                        {active === "maps" && (
                        <>
                            {maps.map((item, index) => (
                            <CarouselItem key={index} className=' flex items-center justify-center'>
                                <motion.div
                                className="w-full aspect-video relative flex items-center justify-center"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                <img
                                    src={item || "/placeholder.svg"}
                                    alt={`Map ${index}`}
                                    className=" h-full object-cover ml-4"
                                />
                                </motion.div>
                            </CarouselItem>
                            ))}
                        </>
                        )}

                        {active === "characters" && (
                        <>
                            {characters.map((item, index) => (
                            <CarouselItem key={index}>
                                <motion.div
                                className="w-full aspect-video  relative"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                <img
                                    src={item || "/placeholder.svg"}
                                    alt={`Character ${index}`}
                                    className=" w-full h-full object-cover object-top ml-4"
                                />
                                </motion.div>
                            </CarouselItem>
                            ))}
                        </>
                        )}

                        {active === "gameplay" && (
                        <>
                            {gameplays.map((item, index) => (
                            <CarouselItem key={index}>
                                <motion.div
                                className="w-full aspect-video  relative"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                <img
                                    src={item || "/placeholder.svg"}
                                    alt={`Gameplay ${index}`}
                                    className=" w-full h-full object-cover ml-4"
                                />
                                </motion.div>
                            </CarouselItem>
                            ))}
                        </>
                        )}
                    </CarouselContent>
                    </motion.div>
                    </AnimatePresence>
                    
                </CarouselContent>
              
                </Carousel>


               

            </motion.div>

            <motion.div 
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px 0px" }}
            transition={{
                type: "spring",
                stiffness: 30,
                damping: 10,
                mass: 1,
                delay: .2
            }}className=' w-full flex items-center justify-center ~mt-2/12'>
                        <a href='https://rof.game/' target='_blank' className=' relative drop-shadow-lg flex items-center justify-center hover:scale-105 duration-300 transition-all'>
                            <img src="/assets/BUTTON.png" alt="button" width={500} height={500} className=' ~w-72/96'/>
                            <p className=' ~text-sm/xl font-bold text-white absolute'>TRY RISE OF FEARLESS NOW</p>
                        </a>

            </motion.div>

        </div>

    </div>
  )
}
