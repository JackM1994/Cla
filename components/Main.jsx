import React from 'react'
import Image from 'next/image'
const Main = () => {
    return (
        <div className='fixed-left h-screen text-center bg-hero bg-no-repeat bg-cover'>
            <div className='max-w-[1024px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div className='bg-black/40 max-w-[700px] w-full mx-auto max-h-[200px] h-full'>
                    <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl py-10 text-white w-[50%] mx-auto p-1'>
                        CLA <span className='text-[#fdad5c]'>Landscaping</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default Main