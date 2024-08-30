"use client"
import React from 'react'
import Image from "next/image"
function Contact() {
  return (
    <div className="pt-[6rem] pb-[3rem]">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2">
            <div>
                <Image src="/images/c1.png"
                 alt="fly" width={600} height={400} className="object-contain mx-auto p-[1rem" />
            </div>
            <div className="flex items-center justify-center flex-col">
                <h1 className='text-black text-center w-[90%] xl:w-[70%] text-[20px] md:[text-22px] font-bold'>
                    Get Special Offers and Travel More
                </h1>
                <p className="mt-[0.4rem] text-black text-[15px] flex items-center justify-center font-semibold opacity-70">
                    Subscribe to see the Secret deals Prices drop the moment you sign up
                </p>
            <div className="flex mt-[1.4rem] rounded-lg bg-gray-300 mb-[3rem] 
            items-center space-x-2 w-[80%] h-[4vh] space-x-2 md:h-[6.3vh]">
                <input className="ml-[1rem] bg-transparent w-[80%] h-[100%] border-none outline-none" 
                type="email" placeholder='Enter mail' />
                    <button className="ml-[1rem] py-2 px-4 bg-blue-700 text-white h-[100%]">Subscribe</button>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Contact