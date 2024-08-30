import React from 'react'
import Image from "next/image"
function Footer() {
  return (
    <div className="pt-[7rem] pb-[2rem] bg-gray-100">
        <div className="w-[80%] mx-auto items-static border-b-2 grid
         grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-[2rem] gap-[2rem]">
            <div>
            <h1 className="footer_heading">Support</h1>
            <a className="footer_link" href="#">Help Center</a>
            <a className="footer_link" href="#">Safety Information</a>
            <a className="footer_link" href="#">cancellation Options</a>
            <a className="footer_link" href="#">Medical Plans</a>
            </div>
            <div>
            <h1 className="footer_heading">Company</h1>
            <a className="footer_link" href="#">About us</a>
            <a className="footer_link" href="#">Community Blog</a>
            <a className="footer_link" href="#">Careers</a>
            <a className="footer_link" href="#">Privacy Policy</a>
            </div>
            <div>
            <h1 className="footer_heading">Contact</h1>
            <a className="footer_link" href="#">Partnership</a>
            <a className="footer_link" href="#">FAQ</a>
            <a className="footer_link" href="#">Get in touch</a>
            </div>
            <Image src="/images/pay.svg" alt="pay" width={230} height={230} className="object-contain mt-4 sm:ml-auto"></Image>
        </div>
    </div>
  )
}

export default Footer