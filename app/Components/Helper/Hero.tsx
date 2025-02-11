import React from 'react';
import SearchBox from './SearchBox';

function Hero() {
  return (
    <div className='relative w-[100%] h-[88vh]'>
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-blue-800 opacity-50"></div>
        <video src="/images/hero.mp4" autoPlay muted loop preload='metadata' className='w-[100%] h-[100%] object-cover'></video>
    <div className="absolute z-[100] w-[100%] v-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-[100%] h-[100%]">
            <div>
                <h1 className="text-[25px] mb-[1rem] md:mb-[0] text-center md:text-[35px]
                tracking-[0.7rem] lg:text-[45px] text-white font-bold uppercase pb-2">
                    Let's Enjoy The Journey
                </h1>
                <p className="text-[18px] md:text-[15px] text-center font-normal uppercase text-white [word-spacing:5px]">
                    Get the prices on 2,000,000+ properties, worldwide
                </p>
            </div>
            <SearchBox />
            <a href="#_" className='rounded px-14 md:px-[24] py-2.5 bg-red-500 relative hover:from-red-500
             hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 ease-out duratiom-300'>
                <span className="absolute right-o w-8 h-32 mt-12
                 transition-all duration-1000 bg-white opacity-10 rotate-12 group-hover:translate-x-40 ease"></span>
                 <span className="relative font-bold">Search</span>
             </a>
        </div>
    </div>
    </div>
  )
}

export default Hero