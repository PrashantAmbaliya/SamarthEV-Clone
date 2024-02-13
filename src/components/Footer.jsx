import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
    return (
        <div className='w-full bg-[#171716] pt-10 pb-2'>
            <div className="flex flex-col items-center mx-auto gap-10 max-w-screen-lg">
                <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-white text-5xl font-bold'>Contact Us!</h1>
                        <div className='flex itmes-center gap-2'>
                            <FaFacebook className='text-white' />
                            <FaTwitter className='text-white' />
                            <FaLinkedin className='text-white' />
                            <FaInstagram className='text-white' />
                            <FaTelegram className='text-white' />
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-2'>
                        <span className='flex items-center gap-1 justify-center text-[#05a826] text-2xl'><FaLocationDot/><h1 className=' font-bold'>Our Address:</h1></span>
                        <span className='text-white text-sm'>Plot No 121, G.I.D.C. Kalol, Ta. Kalol, Dist. Gandhinagar, Gujarat, India - 382721.</span>
                    </div>
                </div>
                <div>
                    <span className='text-white font-semibold'>Proudly created by <a href="https://www.linkedin.com/in/prashant-a-889590228/" className='text-[#05a826]'>Prashant Ambaliya</a> with ♥</span>
                </div>
            </div>
        </div>
    )
}

export default Footer