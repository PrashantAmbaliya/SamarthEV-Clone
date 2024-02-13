import React from 'react'

function BuildingFuture() {
  return (
    <div className='w-full bg-[#f6f6f6] py-10'>
        <div className="max-w-screen-lg mx-auto flex justify-between gap-10">
            <div>
                <img src="ewfwe.png" alt="scooterimage" className='max-w-[550px] scooter-float' />
            </div>
            <div className="flex flex-col p-4 gap-4">
                    <p className='text-[#737a80]'>At Samarth...</p>
                    <h1 className='text-3xl font-semibold text-[#253745]'>We Are Building <span className='text-[#8da300]'>Future</span> For Tomorrow!</h1>
                    <div className='flex gap-4'>
                         <div className='flex items-center justify-center gap-4'>
                            <img src="power_alt-1-60x60.png" alt="" />
                            <p className='text-xl font-semibold text-[#253745]'>Energy Efficient</p>
                         </div>
                         <div className='flex items-center justify-center gap-4'>
                            <img src="icons8-circuit-50.png" alt="" />
                            <p className='text-xl font-semibold text-[#253745]'>Most Advanced</p>
                         </div>
                    </div>
                    <div className='flex gap-4'>
                         <div className='flex items-center justify-center gap-4'>
                            <img src="sdfsd-60x60.png" alt="" />
                            <p className='text-xl font-semibold text-[#253745]'>Durability And Strong Build</p>
                         </div>
                         <div className='flex items-center justify-center gap-4'>
                            <img src="dsfdsfa-60x60.png" alt="" />
                            <p className='text-xl font-semibold text-[#253745]'>Powerful Battry Pack</p>
                         </div>
                    </div>
                    <button className='bg-[#8da300] px-3 py-3 rounded-full w-[180px] font-semibold text-white'>
                        EXPLORE MORE
                    </button>
            </div>
        </div>

    </div>
  )
}

export default BuildingFuture