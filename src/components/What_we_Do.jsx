import React from 'react'

export default function WhatweDo() {
    return (
        <div className='w-full bg-[#f6f6f6] py-10'>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-10">
                <h1 className='text-3xl font-semibold text-[#253745]'>What We Do At <span className='text-[#94b40c]'>Samarth ?</span></h1>
                <div className='flex items-center gap-20'>
                    <div className='group items-center justify-center relative rounded-lg overflow-hidden'>
                        <div className='h-[350px] w-[650px]'>
                            <img src="Research_and_Development.webp" alt="" className='image group-hover:scale-105 w-full h-full object-cover' />
                        </div>
                        <div className='absolute inset-0 flex items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                            <h1 className='text-2xl font-semibold italic text-white'>Research And Development Prowess At Samarth E Mobility</h1>
                        </div>
                    </div>

                    <div className='group items-center justify-center relative rounded-lg overflow-hidden'>
                        <div className='h-[350px] w-[650px]'>
                            <img src="cutting-edge-technologies.png" alt="" className='image group-hover:scale-105 w-full h-full object-cover' />
                        </div>
                        <div className='absolute inset-0 flex items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                            <h1 className='text-2xl font-semibold italic text-white'>Cutting-Edge Technologies And Materials</h1>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-20'>
                    <div className='group items-center justify-center relative rounded-lg overflow-hidden'>
                        <div className='h-[350px] w-[650px]'>
                            <img src="pdeu.png" alt="" className='image group-hover:scale-105 w-full h-full object-cover' />
                        </div>
                        <div className='absolute inset-0 flex items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                            <h1 className='text-2xl font-semibold italic text-white'>Top-Tier Talent From Premier Institutions</h1>
                        </div>
                    </div>

                    <div className='group items-center justify-center relative rounded-lg overflow-hidden'>
                        <div className='h-[350px] w-[650px]'>
                            <img src="techno.jpg" alt="" className='image group-hover:scale-105 w-full h-full object-cover' />
                        </div>
                        <div className='absolute inset-0 flex items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                            <h1 className='text-2xl font-semibold italic text-white'>Empowering Excellence in the EV Industry</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
