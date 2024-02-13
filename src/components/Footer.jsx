import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
    return (
        <div className='w-full bg-[#171716] py-10'>
            <div className="flex flex-col items-center gap-6 max-w-screen-lg">
                <div className='flex justify-between items-center'>
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
                    <div className='flex flex-col gap-5'>
                        <span className='flex items-center gap-1 justify-center'><FaLocationDot className='text-white' /><h1 className='text-white font-bold'>Our Address:</h1></span>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer