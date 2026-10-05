
import { Icon } from '@iconify/react'
import  Link from 'next/link'
import Image from 'next/image'

const icons = [
  'eva:linkedin-outline', 'basil:facebook-outline', 'ant-design:instagram-outlined', 'bxl:telegram'
]
const Nav = ['ABOUT AXVIONALDIGITAL PRIVATE LIMITED', 'SEO SERVICES', 'DIGITAL MARKETING', 'CONTACT']

const specializations = ['TECHNICAL', 'GOOGLE ADS', 'WEB DEVELOPMENT', 'VIRTUAL ASSISTANCE']

const contact = [
  {
    name: 'PRIMARY EMAIL',
    icon: 'carbon:email',
    content: 'info@axvioonal.com',
    path:"mailto:axvional@gmail.com"
  },
  {
    name: 'PHONE',
    icon: 'akar-icons:phone',
    content: '+91 93193 09719',
    path:'tel:+91 93193 09719'
  },
  {
    name: 'OFFICE ADDRESS',
    icon: 'akar-icons:location',
    content: 'D-79,D-Block,Sector-2,Noida,Utter Pradesh 201301',
    path:""
  }
]

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 px-8 sm:px-10 md:px-12 lg:px-15  py-16">
      <div className="max-w-338 w-full mx-auto grid grid-rows-[max-content_max-content_max-content_max-content] gap-8 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 lg:gap-8 ">
        {/* logo */}
        <div className='font-custom'>
          <Image
            src="/Logo_of_Axvional_digital.webp"
            alt="Axvional Digital logo"
            width={20}
            height={20}
            className="w-26 
                      h-26
                      ml-4 "
          />

          <h3 className="text-white 
                            text-sm 
                            font-bold 
                            my-5
                            scale-y-90 ">Axvional Digital Private Limited</h3>
          <p className="text-white/60 
                          text-xs">
            Axvional Digital Private Limited is a performance-driven digital marketing company in delhi NCR offering SEO, Google Ads, Meta Ads, and website development services to help businesses generate high-quality leads and scale faster.
          </p>

          <div className="flex 
                          gap-3 
                          my-6">
            {icons.map((icon, index) => (
              <div key={index} className="border
                                        border-gray-400/20 
                                        rounded-xl ">
                <Icon icon={icon} className="w-5 
                                             h-5 
                                             text-white/60 
                                             mx-2 
                                             my-2" />
              </div>
            ))}
          </div>
        </div>

        {/* naviagetion */}
        <div className='self-start'>
          <h2 className='text-white/80 text-sm font-bold scale-y-90 tracking-widest'>NAVIGATION</h2>
          <div className='flex flex-col mt-7 gap-3'>
            {
              Nav.map((N, index) => (
                <Link href='/' key={index} className='text-white/60 font-bold scale-y-95 text-xs tracking-wider'>{N}</Link>
              ))
            }
          </div>
        </div>

        {/* specializations */}
        <div className='my-4'>
          <h2 className='text-white/80 text-sm font-bold scale-y-90 tracking-widest'>SPECIALIZATIONS</h2>
          <div className='flex flex-col mt-7 gap-3'>
            {
              specializations.map((N, index) => (
                <Link href='/' key={index} className='text-white/60 font-bold scale-y-95 text-xs tracking-wider'>{N}</Link>
              ))
            }
          </div>
        </div>

        {/* global outreach */}
        <div >
          <h2 className='text-white/80 text-sm font-bold scale-y-90 tracking-widest'>GLOBAL OUTREACH</h2>
          <div className='my-7 flex flex-col gap-6 '>
            {
              contact.map((detail, index) => (
                <div key={index} className=''>
                  <p className='text-sm text-white/60 font-bold mb-1 scale-y-95 w-fit '>{detail.name}</p>
                  <div className='flex items-center gap-2 text-white'>
                    <Icon
                      icon={detail.icon}
                      className='w-6 h-5 text-white/60 '
                    />
                    <Link href={detail.path} className='italic font-bold w-fit bg-linear-to-b from-white via-white to-white/20 bg-clip-text text-transparent ' >{detail.content}</Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  );
}
