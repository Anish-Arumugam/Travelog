"use client"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";


export default function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  console.log(isMenuOpen)
  
  return (
   <div className="w-[100%] bg-white sm:p-6 md:flex  md:justify-between">
    <div className="flex w-[80%] mx-auto items-center justify-between">
        <div className="relative w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]">
          <Image src="/images/logo.png" alt="logo" layout="fill"></Image>  
        </div>
        <div className="md:hidden">
          <button className="text-black" onClick={toggleMenu}>
            <svg 
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-6 h-6">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Tour</a>
            <a href="#" className="nav-link">Hotel</a>
            <a href="#" className="nav-link">Review</a>
            <a href="#" className="nav-link">Contact</a>
            <a href="#" className="relative hidden lg:inline-flex items-center justify-center font-medium text-white bg-gray-500">
                <span className="bg-green-600 group-hover:w-56 group-hover:h-56 rounded-full p-2"> Book Now</span>
            </a>
        </div>
        {/*mobile menu */}

        {isMenuOpen ? (
           <div className="flex flex-col py-2 md:hidden">
           <a href="#" className="nav-link">Home</a>
           <a href="#" className="nav-link">Tour</a>
           <a href="#" className="nav-link">Hotel</a>
           <a href="#" className="nav-link">Review</a>
           <a href="#" className="nav-link">Contact</a>
           <a href="#" className="nav-link bg-green-600 rounded-full p-2">
              Book Now
           </a>
       </div>
        ) : null}
      </div>
    </div>
  
  )
}  