"use client";

import Image from 'next/image'
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { ArrowRight, Cpu } from "lucide-react"
import { useState } from 'react';
import { Icon as ICON } from '@iconify/react';
import { useEffect } from 'react';

const links = [
  ["Home", '#HeroSection'],
  ["Services", '#OurServices'],
  ["Case Studies", '#CaseStudies'],
  ["About", '#About']
]

const icons = [
  'eva:linkedin-outline', 'basil:facebook-outline', 'ant-design:instagram-outlined', 'bxl:telegram'
]

export default function Header() {

  const [Dropdown, setDropdown] = useState(false)


  function OpenMenu() {
    setDropdown(true)
  }
  function CloseMenu() {
    setDropdown(false)
  }

  useEffect(() => {
    if (Dropdown) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [Dropdown])

  function ClickSection(path){

    document.body.classList.remove('overflow-hidden')

    setDropdown(false)

    window.location.href = path

  }

  return (
    <header className="absolute inset-0 z-50 w-full h-18 px-8 sm:px-10 md:px-12 lg:px-14 " >


      <div className="w-full max-w-326 h-full mx-auto flex justify-center items-center">

        {/* // desktop header */}
        <div className='flex-1 h-14 flex gap-3 min-w-52 items-center' >

          {/* logo */}
          <Image
            src="/Logo_of_Axvional_digital.webp"
            alt="Axvional logo"
            width={15}
            height={14}
            loading='eager'
            className='h-14 w-15' 
          />
          <Link href="https://www.axvionel.com/" target='_blank' className='relative leading-4.5 text-center shrink-0'>
            <p className='font-bold text-white scale-95'>Axvional Digital</p>
            <p className='text-[12px] text-gray-500 font-bold tracking-widest scale-y-85 '>PRIVATE LIMITED</p>
            <Cpu className='absolute top-0 left-31 w-3 h-3 text-gray-300 transition-colors duration-500 ease-in hover:text-gray-500' />
          </Link>
        </div>

        {/* nav bar   */}
        <div className='flex-4 hidden lg:block'>
          <nav className=' w-auto flex justify-center gap-10 '>
            {
              links.map(([link, path], index) => (
                <span key={`${link}-${index}`}>
                  <a href={path} className='text-[#F4F8FC] opacity-90 font-custom font-extralight'>{link}</a>
                </span>
              ))
            }
          </nav>
        </div>

        {/* call button */}
        <div className=' w-60 hidden md:flex justify-end'>
          <button className='bg-[#FFC83D] text-black font-bold rounded-full w-full max-w-56 transition-all flex justify-center py-2 items-center gap-2 px-3 ' >
            <p className='text-sm text-[#0B1736] '>
              Get a Free Strategy Call
            </p>
            <ArrowRight className='w-5 h-5' />
          </button>
        </div>

        {/* tablet */}

        <div className='w-1/12 flex justify-end lg:hidden'>
          <MdOutlineMenu onClick={OpenMenu} className='w-9 h-9 text-white' />
        </div>

        {
          Dropdown && (
            <div className='absolute inset-0 bg-[#0B1736]/70 h-screen lg:hidden '>
              <div className='absolute z-50 bg-[#0B1736] w-60 right-0 py-9 px-3 h-full min-[425px]:w-70 md:w-80 ' >
                <div className=' flex flex-row gap-0 justify-between '>
                  <div className=''>
                    <image
                      src={logo}
                      alt="Axvional digital"
                      className='w-14 h-14'
                    />
                    <Link to="https://www.axvionel.com/" target='_blank' className='relative leading-4.5 text-center shrink-0'>
                      <p className='font-bold text-white scale-95'>Axvional Digital</p>
                      <p className='text-[12px] text-gray-500 font-bold tracking-widest scale-y-85 '>PRIVATE LIMITED</p>
                      <Cpu className='absolute top-0 left-31 w-3 h-3 text-gray-300 transition-colors duration-500 ease-in hover:text-gray-500' />
                    </Link>
                  </div>
                  <ICON
                    onClick={CloseMenu}
                    icon='akar-icons:cross'
                    className='w-6 h-6 text-[white] mt-4 '
                  />
                </div>

                {/* mobile nav  */}
                <div className='px-4 my-4'>
                  <nav>
                    {links.map(([Link, path], index) => (
                      <div key={index} onClick={()=>{ClickSection(path)}} className='flex flex-rows justify-between items-center border-b border-gray-500/50 py-3 '>
                        <a
                          href={path}
                          className='text-white font-semibold text-lg '
                        >
                          {Link}
                        </a>
                        <ICON
                          icon='hugeicons:greater-than'
                          className='w-5 h-5 text-white '
                        />
                      </div>

                    ))}
                  </nav>

                </div>

                <Link
                  to=''
                  className="bg-[#FFC83D] flex flex-row py-2 justify-center items-center gap-2 rounded-full my-6 mx-2"
                >
                  <p className=' text-[##0B1736] text-sm font-semibold '>Get a Free Strategy Call</p>
                  <ArrowRight className='w-4 h-4' />
                </Link>

                <div className='border-t border-gray-500/60 mx-3 py-3'>
                  <p className='text-white/60 text-base font-custom'>Follow Us</p>
                  <div className="flex 
                                            gap-3 
                                            my-2">
                    {icons.map((icon, index) => (
                      <div key={index} className="border
                                                          border-gray-400/20 
                                                          rounded-xl ">
                        <ICON icon={icon} className="w-5 
                                                               h-5 
                                                               text-white/60 
                                                               mx-2 
                                                               my-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </header>
  )
}
