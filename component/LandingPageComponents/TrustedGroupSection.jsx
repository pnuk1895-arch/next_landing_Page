"use client";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import Image from 'next/image'

import Careem from '@/assets/businessGroupLogo/Careem/careem_small.webp'
import DAMAC from "@/assets/businessGroupLogo/DAMAC/DAMAC_small.webp"
import EMAAR from "@/assets/businessGroupLogo/EMAAR/EMAAR_small.webp"
import Emirates from "@/assets/businessGroupLogo/Emirates/Emirates_small.webp"
import Noon from "@/assets/businessGroupLogo/Noon/Noon_small.webp"
import tabalat from "@/assets/businessGroupLogo/talabat/talabat_small.webp"
import etisalat from "@/assets/businessGroupLogo/etisalat/etisalat_small.webp"

import 'swiper/css';

const GroupsLogo = [
    {
        name: "Careem",
        image: Careem
    },
    {
        name: 'DAMAC',
        image: DAMAC
    },
    {
        name: 'EMAAR',
        image: EMAAR
    },
    {
        name: 'Emirates',
        image: Emirates
    },
    {
        name: 'Noon',
        image: Noon
    },
    {
        name: 'tabalat',
        image: tabalat
    },
    {
        name: 'etisalat',
        image: etisalat
    },

]

export default function TrustedGroupSection() {
    return (
        <section className='w-full bg-white'>
            <div className='w-full'>
                {/* title */}
                <div className='w-full flex justify-center my-2 font-semibold font-custom scale-y-89 transition-[width] duration-1000 ease-in'>
                    <p className='tracking-tight text-sm lg:text-base text-[#0B1736]'>TRUSTED BY GROWING BUSINESSES IN THE UAE</p>
                </div>
                <div className='w-full '>
                    <Swiper
                        modules={[Autoplay]}

                        loop={true}
                        slidesPerView="auto"
                        spaceBetween={10}
                        speed={4500}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false
                        }}
                        className='logo-swiper mx-auto'
                    >
                        {/* logo of groupiing business */}
                        {
                            [...GroupsLogo, ...GroupsLogo, ...GroupsLogo].map((obj, index) => (
                                <SwiperSlide key={index} className="relative! border-0! flex! justify-center after:content-[''] after:absolute after:right-0 after:top-4 md:after:top-5 lg:after:top-6 after:w-0.5 after:h-6 md:after:h-8 after:bg-gray-300 w-24! sm:w-30! md:w-36! lg:w-40! transition-[width] duration-700 ease-in">
                                    <div className=" w-16 h-12 md:w-20 md:h-16 lg:w-32 lg:h-20 flex justify-center items-center ">
                                        <Image
                                            src={obj.image}
                                            alt={obj.name}
                                            width={120}
                                            height={60}
                                            className='text-black w-22' />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
