"use client";

import Image from 'next/image'
import { Icon } from "@iconify/react"

import BgImage from '@/assets/CaseStudies/caseStudies_large.webp'

const data = [
  {
    icon: "el:group",
    score: "3.5x",
    content: "Average ROI"
  },
  {
    icon: "famicons:rocket-outline",
    score: "+320%",
    content: "increase in Leads"
  },
  {
    icon: "streamline-plump:graph-bar-increase-solid",
    score: "500+",
    content: "Compaigns Managed"
  }
]

export default function CaseStudies() {
  return (
    <section id="CaseStudies" className="relative w-full">
      <section className="
      w-full
      max-w-366
      px-8
      sm:px-10
      md:px-12
      lg:px-14
      py-3
      text-amber-50
      mx-auto
      lg:h-59
    ">

        <div className="lg:h-56">

          <div className="
          absolute
          inset-0
          -z-1
        ">

            <Image
              src={BgImage}
              alt=""
              className="
              w-full
              lg:h-59
              object-center
              object-fill
            "
            />

            <div className="
            absolute
            inset-0
            bg-[#061B3A]/70
            sm:bg-[#061B3A]/65
            md:bg-[#061B3A]/60
            lg:bg-[#061B3A]/55
          ">
            </div>

          </div>

          <div className="w-full">

            <div className="
            mx-auto
            w-full
            flex
            flex-col
            items-center
          ">

              {/* first title */}

              <h2 className="
              text-[9px]
              tracking-widest
              scale-y-80
              min-[425px]:text-xs
              sm:text-sm
              md:text-base
              lg:text-lg  
              text-[#F4F8FC]
            ">
                PROVEN IMPACT
              </h2>

              {/* second heading */}

              <p className="
              font-bold
              font-custom
              text-center
              text-sm

              min-[425px]:text-base
              
              sm:text-lg
              
              md:text-2xl
              
              lg:text-3xl
            ">
                Real Growth for <span className="text-[#FFC83D] ">UAE Businesses</span> 
              </p>

            </div>


            <div className="
            w-full
            flex
            justify-between
            items-center
          ">

              {
                data.map((item, index) => (

                  <div
                    key={index}
                    className={`
                    flex-1
                    flex
                    flex-col
                    items-center
                    first:items-start
                    last:items-end
                    my-3
                    sm:my-4
                    

                    ${index === 1
                        ? "px-2 min-[425px]:px-4 sm:px-6 md:px-8"
                        : "px-0!"
                      }

                    ${index < data.length - 1
                        ? "border-r border-[#D9E2EC]/20"
                        : "border-0!"
                      }
                  `}
                  >

                    <div className="
                    flex
                    flex-col
                    items-center
                    gap-0.5
                    min-[425px]:gap-1
                    md:flex-row
                    md:gap-3
                  ">

                      <Icon
                        icon={item.icon}
                        className="
                        text-[#FFC83D]
                        text-2xl
                        min-[425px]:text-3xl
                        sm:text-4xl
                        md:text-5xl
                        xl:text-6xl
                      "
                      />

                      <div className="
                      flex
                      flex-col
                      items-center
                      shrink-0
                    ">

                        <p className="
                        text-xs
                        font-semibold
                        min-[425px]:text-sm
                        sm:text-lg
                        md:text-2xl
                        md:font-bold
                        lg:text-3xl
                      ">
                          {item.score}
                        </p>

                        <p className="
                        text-[8px]
                        tracking-wide
                        whitespace-nowrap
                        min-[425px]:text-[10px]
                        sm:text-xs
                        md:text-base
                        md:tracking-wider
                        lg:text-lg

                      ">
                          {item.content}
                        </p>

                      </div>

                    </div>

                  </div>

                ))
              }

            </div>

          </div>

        </div>

      </section>
    </section>
  )
}