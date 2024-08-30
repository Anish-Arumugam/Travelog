
import React from 'react'
import { CalendarDateRangeIcon, MapIcon } from '@heroicons/react/16/solid'

function SearchBox() {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
     items-center justify-center gap-[2rem] mt-[3rem] w-[80%]'>

        {/*first input*/}
        <div className="flex items-center space-x-6">
        <MapIcon className="w-[1.5rem] h-[1.5rem] text-red-600"></MapIcon>
        <div>
            <p className='text-[18px] font-semibold mb-[0.2rem]'>Location</p>
            <input className="outline-none border-none" type='text' placeholder='where are you going?'></input>
         </div>
        </div>

        {/*second input*/}
        <div className="flex items-center space-x-6">
         <CalendarDateRangeIcon className="w-[1.5rem] h-[1.5rem] text-red-600"></CalendarDateRangeIcon>
         <div>
            <p className='text-[18px] font-semibold mb-[0.2rem]'>start date</p>
            <input className="outline-none border-none" type='date'></input>
         </div>
        </div>
     
        {/*third input*/}
        <div className="flex items-center space-x-6">
         <CalendarDateRangeIcon className="w-[1.5rem] h-[1.5rem] text-red-600"></CalendarDateRangeIcon>
         <div>
            <p className='text-[18px] font-semibold mb-[0.2rem]'>end date</p>
            <input className="outline-none border-none" type='date'></input>
         </div>
        </div>

        {/*fourth input*/}
        <div className="flex items-center space-x-6">
         <CalendarDateRangeIcon className="w-[1.5rem] h-[1.5rem] text-red-600"></CalendarDateRangeIcon>
         <div>
            <p className='text-[18px] font-semibold mb-[0.2rem]'>Guest</p>
            <p className="text-[16px] font-formal">1 Guest 1 Room</p>
         </div>
        </div>
     </div>
  )
}

export default SearchBox