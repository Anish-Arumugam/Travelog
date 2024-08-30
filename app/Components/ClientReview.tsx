import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/16/solid';

interface Props {
    image : string;
    name : string
}

function ClientReview({image, name} : Props) {
  return ( <div className='pt-4'>
    <div>
    <Image src={`${image}`}
        alt={name} width={80} height={80} className="rounded-full mx-auto"></Image>
    </div>
    <p className='mt-[0.4] text-black text-center text-[15px] font-normal opacity-70'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Corrupti, mollitia. Eligendi repudiandae explicabo quam maiores provident neque dolores cupiditate doloribus!
        </p>
        <div className="p-[1rem]">
        <div className="flex text-center justify-center items-center">
            <StarIcon className="text-red-600 w-[1rem] h-[1rem]" />
            <StarIcon className="text-red-600 w-[1rem] h-[1rem]" />
            <StarIcon className="text-red-600 w-[1rem] h-[1rem]" />
            <StarIcon className="text-red-600 w-[1rem] h-[1rem]" />
            <StarIcon className="text-red-600 w-[1rem] h-[1rem]" />
        </div>
        <h1 className="mt-[0.8rem] text-[20px] text-center text-black font-bold captitalize">{name}</h1>
  </div>
  </div>
    
  )
}

export default ClientReview