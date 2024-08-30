import React from 'react'
import Image from "next/image";
import { StarIcon } from '@heroicons/react/16/solid';

interface Props {
    image:string;
    name:string;
    city:string;
    price:string;
    reviewNum:string;
}
function HotelCard({name, city, image, price, reviewNum}: Props) {
  return <div className='cursor-pointer bg-white rounded-md'>
    <div className="relative w-[100%] h-[15rem]">
        <Image src={`${image}`}
        alt={name} className="transform object-cover transition-all duration-700 scale-100 hover:scale-125" layout="fill"></Image>
    </div>
    <div className="p-[1rem]">
        <div className="flex items-center">
            <StarIcon className="text-red-600 w-[1rem] h-[1rem]" />
            <StarIcon className="text-red-600 w-[1rem] h-[1rem]" />
            <StarIcon className="text-red-600 w-[1rem] h-[1rem]" />
            <StarIcon className="text-red-600 w-[1rem] h-[1rem]" />
            <StarIcon className="text-red-600 w-[1rem] h-[1rem]" />
        </div>
        <h1 className="mt-[0.4rem] text-[20px] text-black font-bold captitalize">{name}</h1>
        <p className="text-[15px] text-black opacity-70">{city}</p>
        <span className='text-[16px] text-red-600 font-bold'>{price}/day</span>
        </div>
  </div>
}

export default HotelCard