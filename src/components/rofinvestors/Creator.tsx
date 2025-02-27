'use client'
import { creator } from '@/app/data'
import { motion } from 'framer-motion'
import React from 'react'

export default function Creator() {
  return (
    <div id='creator' className=' scroll-mt-12 w-full h-auto flex flex-col items-center py-20 px-4'>

        <div className=' w-full max-w-[1440px] flex flex-col items-center justify-center mt-4'>
            <motion.img src="/assets/aboutthecreator.png" alt="" width={480} 
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
            className=' ~w-72/96'/>

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
            className=' relative w-fit hidden lg:flex items-center justify-end mt-20'>
                <img src="/assets/Description TAB.png" alt="tab" className=' h-[600px]' />
                <img src="/assets/IMAGE - About Creation.png" alt="creator" width={800} height={800} className=' h-full left-4 bottom-3 -translate-y-2 absolute'/>


                <div className=' w-[90%] h-fit grid grid-cols-1 md:grid-cols-2 absolute p-6 '>

                    <div>
                    </div>

                    <div className=' flerx flex-col'>
                        <p className=' whitespace-pre-wrap ~text-sm mt-2'>{creator.description}</p>
                    </div>

                </div>
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
            className=' relative w-fit lg:hidden flex items-center justify-center ~mt-8/20'>

                <div className=' w-full h-fit grid grid-cols-1 md:grid-cols-2 p-6 bg-orange-200 rounded-md'>
                    <div>
                        <img src="/assets/IMAGE - About Creation.png" alt="creator" width={700} height={700} className=' md:h-[400px] -translate-y-4'/>
                    </div>

                    <div className=' flerx flex-col'>
                        <p className=' whitespace-pre-wrap ~text-sm mt-4'>{creator.description}</p>
                    </div>

                </div>
            </motion.div>

        </div>

    </div>
  )
}
