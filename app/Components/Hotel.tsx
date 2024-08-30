import React from 'react'
import HotelCard from './HotelCard'

function Hotel() {
  return (
    <div className="pt-[4rem] text-center bg-gray-200 pb-[4rem]">
        <h1 className="heading">Best Hotel</h1>
        <div className="grid grid-col-1 md:grid-col-2 lg:grid-col-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]">
        <div>
            <HotelCard name="Hotel Nexus" city="rajashahi" price="$52" reviewNum="21" image="/images/h1.png" />
        </div>
        <div>
            <HotelCard name="Hotel Empire" city="berlin" price="$74" reviewNum="22" image="/images/h2.png" />
        </div>
        <div>
            <HotelCard name="Hotel Akshaya" city="rajashahi" price="$97" reviewNum="23" image="/images/h3.png" />
        </div>
        </div>
    </div>
  )
}

export default Hotel