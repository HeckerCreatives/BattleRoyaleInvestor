'use client'
import { nav } from '@/app/data';
import React, { useEffect, useState } from 'react'
import { FaInstagram, FaTelegram, FaXTwitter } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Instagram, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { BsTwitterX } from 'react-icons/bs'


interface Links {
  _id: string
  title: string
  createdAt:string 
  updatedAt: string
  link: string
}


export default function HeroSection() {

  const [list, setList] = useState<Links[]>([])


  //get socials
  useEffect(() => {
    const fetchlinks = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sociallinks/getsociallinksa?filter=user`);

            setList(response.data.data)
        
        } catch (error) {
          
        }
    };

    fetchlinks();
  }, []);

  const getImage = (type: string) => {
    if(type === 'instagram'){
      return  <FaInstagram size={25} className=' rounded-full text-amber-950 hover:scale-110 ease-in-out duration-300'/>
    }  else if(type === 'x'){
      return  <BsTwitterX size={25} className=' rounded-full text-amber-950 hover:scale-110 ease-in-out duration-300'/>
    } else {
      return <FaTelegram size={25} className=' rounded-full text-amber-950 hover:scale-110 ease-in-out duration-300'/>
    }

  }

  
  
  return (
    <div className=' relative z-10 flex flex-col items-center w-full h-[100dvh] max-h-[1080px] px-4'
    style={{ backgroundImage: "url('/assets/bg/hero.png')" , backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'bottom'}}>

      <div className=' absolute w-full h-full bg-gradient-to-b from-zinc-950/80 to-zinc-950/0'>

      </div>

      <nav className=' relative w-full max-w-[1240px] h-auto flex items-center justify-between mt-4 bg-red-400'>
      <img src="/navigator TAB.png" alt="tab" className=' w-full absolute z-10 h-[92px]' />
        <a href="/">
        <img src="/logo.png" alt="logo" width={90} height={90} className=' relative z-10 ml-2 lg:ml-4' />
        </a>

        <div className=' mr-4 relative z-10 hidden lg:flex items-center gap-4 text-amber-950 font-bold text-sm font-dihjauti p-2'>
          {nav.map((item, index) => (
            <a key={index} href={item.path} 
            className=' hover:text-orange-600 transition-all duration-300'>{item.name}</a>
          ))}
        
          <div className=' relative w-fit h-full flex items-center justify-center'>
            <img src="/assets/Top Button.png" alt="button" width={150} height={150} />
            <div className=' w-full h-full text-black absolute flex items-center justify-center gap-4'>
              {list.map((item, index) => (
                <a href={item.link} key={item._id} target='_blank' className=' hover:scale-110 transition-all duration-300'>
                 {getImage(item.title)}
                </a>
              ))}
              {/* <a href="http:/x.com" className=' hover:scale-110 transition-all duration-300'>
                <FaXTwitter size={25}/>
              </a>
              <a href="http://instagram.com/" className=' hover:scale-110 transition-all duration-300'>
                <FaInstagram size={25}/>
              </a> */}

            </div>
          </div>
        </div>

        <Sheet>
        <SheetTrigger className=' mr-2 relative z-10 lg:hidden block bg-amber-800 text-white p-1 rounded-sm'>
          <Menu size={20}/>
        </SheetTrigger>
        <SheetContent className=' bg-amber-950 border-amber-900'>
          <SheetHeader>
            <SheetTitle className=' flex items-center justify-center'>
              <img src="/logo.png" alt="logo" width={150} height={150} />
            </SheetTitle>
            <SheetDescription>
              
            </SheetDescription>
          </SheetHeader>

          <div className=' flex flex-col items-center gap-8 text-white text-sm font-dihjauti p-2 mt-6'>
            {nav.map((item, index) => (
              <a key={index} href={item.path}>{item.name}</a>
            ))}
          
            <div className=' relative w-fit h-full flex items-center justify-center'>
              <img src="/assets/Top Button.png" alt="" width={150} />
              <div className=' w-full h-full text-black absolute flex items-center justify-center gap-4'>
              {list.map((item, index) => (
                <a href={item.link} key={item._id} target='_blank' className=' hover:scale-110 transition-all duration-300'>
                 {getImage(item.title)}
                </a>
              ))}
              </div>
            </div>
          </div>
        </SheetContent>
        </Sheet>


        
      </nav>

      <div className=' relative z-10 w-full h-full flex justify-center items-center text-white'>
        <motion.h1 
        
         initial={{ opacity: 0, y: -50 }}
         whileInView={{ opacity: 1, y: -100 }}
         viewport={{ once: true, margin: "-100px 0px" }}
         transition={{
             type: "spring",
             stiffness: 30,
             damping: 10,
             mass: 1,
             delay: 0
         }}
        className=' ~text-4xl/6xl font-bold font-gilgond text-center -translate-y-24'>Welcome Investors</motion.h1>

      </div>
    </div>
  )
}
