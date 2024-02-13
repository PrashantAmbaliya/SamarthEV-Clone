import React from 'react'

function navbar() {
  return (
    <>
        <nav className='bg-white'>
            <div className="max-w-screen-2xl flex mx-auto item-center justify-between items-center p-2">
                  <div><img src="./SamarthEV.webp" alt="samarthEv Logo" className='h-12' /></div>
                  <div className='text-sm'>
                    <ul className='flex'>
                        <li>
                          <a href="/" className='flex items-center justify-center text-grey font-bold rounded-full transition ease-in delay-120 hover:bg-[#ebf3c2] hover:text-[#8da300]'>
                            <span className='mx-3 my-1.5'>HOME</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className='flex items-center justify-center text-grey font-bold rounded-full transition ease-in delay-120 hover:bg-[#ebf3c2] hover:text-[#8da300]'>
                            <span className='mx-3 my-1.5'>ABOUT US</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className='flex items-center justify-center text-grey font-bold rounded-full transition ease-in delay-120 hover:bg-[#ebf3c2] hover:text-[#8da300]'>
                            <span className='mx-3 my-1.5'>CONTACT US</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className='flex items-center justify-center text-grey font-bold rounded-full transition ease-in delay-120 hover:bg-[#ebf3c2] hover:text-[#8da300]'>
                            <span className='mx-3 my-1.5'>INVESTORS</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className='flex items-center justify-center text-grey font-bold rounded-full transition ease-in delay-120 hover:bg-[#ebf3c2] hover:text-[#8da300]'>
                            <span className='mx-3 my-1.5'>CAREER</span>
                          </a>
                        </li>

                    </ul>
                  </div>
            </div>
        </nav>
    </>
  )
}

export default navbar