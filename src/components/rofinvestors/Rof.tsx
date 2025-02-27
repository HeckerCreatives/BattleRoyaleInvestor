'use client'
import React from 'react'
import ImageSlider from '../common/Imageslider'
import ImageSlidermobile from '../common/Imageslidermobile'
import { motion } from 'framer-motion'

export default function Rof() {
  return (
    <section className=' relative w-full h-full flex flex-col items-center text-white'
    >
        <div className=' relative  w-full max-w-[1920px] flex flex-col items-center justify-center md:h-[500px]'>
            {/* <h1 className=' ~text-3xl/5xl font-gilgond mt-12'>Rise of Fearless</h1> */}

            <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-gilgond mt-12 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                transition={{
                    type: "spring",
                    stiffness: 30,
                    damping: 10,
                    mass: 1,
                }}
            >
                Rise of Fearless
            </motion.h1>

            <img src="/assets/Image - The Rise of Fearless.png" alt="rof" width={900} height={900} className=' hidden lg:block absolute left-0 top-0'/>


            <div className=' w-full grid grid-cols-1 lg:grid-cols-2 ~mt-10/20  place-items-center px-4'>
                <div className=' w-[80%]'>
                    {/* <img src="/assets/Image - The Rise of Fearless.png" alt="rof" width={900} height={900} className=' '/> */}

                </div>

                <div className=' flex flex-col items-center justify-center gap-8 lg:pr-32 ~text-sm/xl'>
                    <motion.p 
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px 0px" }}
                     transition={{
                       type: "spring",
                       stiffness: 30,
                       damping: 10,
                       mass: 1,
                       delay: 0.2
                     }}
                    className=' text-center lg:text-end'>In 1888 (Ethiopian calendar), the Battle of Adwa became one of the most pivotal moments in African history. Ethiopian forces, led by Emperor Menelik II and Empress Taytu Betul, stood against the invading Italian army, defying European colonial expansion. Outnumbered but not outmatched, Ethiopia's warriors united from all corners of the empire, wielding superior strategy, deep knowledge of the terrain, and unwavering determination.</motion.p>

                    <motion.p 
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px 0px" }}
                     transition={{
                       type: "spring",
                       stiffness: 30,
                       damping: 10,
                       mass: 1,
                       delay: 0.4
                     }}
                    className=' text-center lg:text-end'>Against the odds, Ethiopia delivered a decisive victory, shattering Italy's colonial ambitions and securing its place as the only African nation to successfully resist European colonization. This triumph sent shockwaves across the world, igniting movements for independence across Africa and inspiring generations to fight for sovereignty.</motion.p>
                </div>

            </div>

        </div>

        <div className=' relative z-20 w-full h-full mt-12 flex items-center justify-center'>
            <img src="/assets/Tri Plate.png" alt="plate" className=' min-h-[900px]'/>
            <div className=' w-full h-full absolute flex flex-col items-center justify-center px-4'>

                <div className=' w-full max-w-[1440px] h-[60%] flex flex-col '>
                    <motion.h2 
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px 0px" }}
                     transition={{
                         type: "spring",
                         stiffness: 30,
                         damping: 10,
                         mass: 1,
                     }}
                    className=' ~text-2xl/5xl font-dihjauti font-bold max-w-[300px] md:max-w-[600px]'>The legacy of Adwa is at the heart of Rise of Fearless</motion.h2>
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
                    className=' ~text-sm/xl mt-8 max-w-[900px]'>With carefully crafted maps based on iconic African landscapes, such as the Great TITE Rift Valley and Lalibela’s rock-hewn churches, and characters rooted in historical traditions, Rise of Fearless delivers an immersive experience that resonates on a global scale.</motion.p>

                    <motion.div 
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px 0px" }}
                     transition={{
                         type: "spring",
                         stiffness: 30,
                         damping: 10,
                         mass: 1,
                         delay: .4
                     }}
                    className=' w-full flex items-center justify-center mt-12'>
                        <img src="/assets/group1.png" alt="map" width={800} height={800} className=' md:w-[60%]' />
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
                         delay: .6
                     }}
                    className=' w-full flex items-center justify-center ~mt-12/32'>
                        <a href='/#invest' className=' relative drop-shadow-lg flex items-center justify-center'>
                            <img src="/assets/BUTTON.png" alt="button" width={500} height={500} className=' ~w-64/96'/>
                            <p className=' !text-sm/2xl font-bold text-white absolute'>CONNECT WITH US</p>
                        </a>

                    </motion.div>


                </div>

                
            </div>
        </div>

        <div id='origin' className=' scroll-mt-12 relative w-full max-w-[1440px] flex flex-col items-center justify-center h-auto '>
            <motion.img src="/assets/Logo Distort.png" alt="rof" width={700} height={700}  
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
            className='  absolute left-0'/>

            <div className=' relative z-20 w-full max-w-[1640px] grid grid-cols-1 lg:grid-cols-[600px_1fr]'>
                <div>

                </div>

                <div className=' flex flex-col items-end gap-8 px-4 '>
                    <motion.img src="/assets/origin.png" alt="origin" width={220} height={220} 
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
                    className=' ~w-36/64 mb-8' />
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
                    className=' ~text-sm/xl text-end'>Rise of Fearless began as an unconventional idea: introducing NFTs to the African market, where many countries lacked digital payment infrastructure. What initially seemed like a simple idea, soon revealed itself as a significant opportunity. We discovered that people in rural areas could now purchase digital assets through crypto, opening the door to new possibilities for online marketplaces and sparking the idea to launch a gaming platform.</motion.p>

                    <motion.p 
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px 0px" }}
                     transition={{
                         type: "spring",
                         stiffness: 30,
                         damping: 10,
                         mass: 1,
                         delay: .4
                     }}
                    className=' ~text-xs/lg text-end'>The game originated from the Dire Lej NFT community, which gained momentum during the crypto bear market through private funding and grassroots creativity. Developed without external investment, Rise of Fearless grew organically, supported by a passionate and engaged community committed to telling African stories. What started as a small project has now evolved into a fully developed, independent initiative, showcasing Africa’s potential as a global creative force.</motion.p>

                </div>

            </div>

        </div>

        <div className=' w-full max-w-[1920px] h-auto flex flex-col items-center justify-center  bg-gradient-to-t from-zinc-950 to-zinc-950/0 pb-40 lg:py-40 translate-y-24 md:translate-y-40 px-4'>
            <motion.h2 
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
            className=' ~text-2xl/5xl font-dihjauti text-center max-w-[600px]'>Our vision is to revolutionize gaming
            and connect players to Africa’s heritage.</motion.h2>

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
            className=' ~text-sm/xl max-w-[900px] mt-8 text-center text-zinc-300'>With carefully crafted maps based on iconic African landscapes, such as the Great Rift Valley and Lalibela’s rock-hewn churches, and characters rooted in historical traditions, Rise of Fearless delivers an immersive experience that resonates on a global scale.</motion.p>

            {/* <img src="/assets/screens.png" alt="screens" className=' max-w-[1440px] w-full ~mt-8/20' /> */}
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
             }}
            className=' w-full hidden md:block'>
                <ImageSlider/>
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
             }}
            className=' w-full block md:hidden'>
                <ImageSlidermobile/>
            </motion.div>

        </div>

    </section>
  )
}
