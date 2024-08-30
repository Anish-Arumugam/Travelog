import ReviewSlider from './ReviewSlider'
import React from 'react'

function Reviews() {
  return (
    <div className='pt-[3rem] pb-[3rem]'>
        <h1 className="heading">Client Review</h1>
        <div className='mt-[4rem] w-[80%] mx-auto'>
        <ReviewSlider />
        </div>
    </div>
  )
}

export default Reviews