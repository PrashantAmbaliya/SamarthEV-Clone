import React from 'react'

function EvFeatures() {
    return (
        <div className='w-full mx-auto flex items-center justify-center p-10'>
            <div className='flex flex-col items-center gap-6 max-w-screen-lg text-xs'>
                <h1 className='text-[#94b40c] font-semibold text-4xl'>EV <span className='text-[#253745]'>Features</span></h1>
                <p className='text-[#253745]'>We are best in te industry. Let's explore featres</p>
                <div className='flex gap-4 justify-between'>
                    <div className='flex flex-col justify-between gap-4'>
                        <div className='flex gap-4'>
                            <img src="1-2-70x70.png" alt="futurisitc Design" className='max-h-[70px]'/>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold'>Futuristic Design</h1>
                                <p className='text-[#253745]'>Futuristic design melds innovation, aesthetics, and functionality, pushing boundaries creatively.</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <img src="2-1-70x70.png" alt="" className='max-h-[70px]'/>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold'>Cost Efficient</h1>
                                <p className='text-[#253745]'>Maximizing value while minimizing expenses is the essence of cost efficiency.</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <img src="2345454-70x70.png" alt="" className='max-h-[70px]'/>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold'>Comfortable And Reliable</h1>
                                <p className='text-[#253745]'>Comfortable and reliable, a winning combination for peace of mind</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between gap-4'>
                        <img src="ewfwe.png" alt="scooterimage" className='max-w-[350px]' />
                    </div>
                    <div className='flex flex-col justify-between gap-4 text-right'>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold'>Intelligent Control System</h1>
                                <p className='text-[#253745]'>Seamlessly managing tasks through smart automation and insights.s</p>
                            </div>
                            <img src="4-70x70.png" alt="" className='max-h-[70px]'/>
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold'>More Space</h1>
                                <p className='text-[#253745]'>More space offers ample storage capacity for added convenience and versatility.</p>
                            </div>
                            <img src="5-70x70.png" alt="" className='max-h-[70px]'/>
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold'>100% Made In India</h1>
                                <p className='text-[#253745]'>Showcasing indigenous craftsmanship and innovation proudly.</p>
                            </div>
                            <img src="6-70x70.png" alt="" className='max-h-[70px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EvFeatures