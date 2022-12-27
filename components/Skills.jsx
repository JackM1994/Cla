import React from 'react'
import Image from 'next/image'

const Skills = () => {
    return(
        <div id='services' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#fdad5c]'>Skills</p>
            <h2 className='text-3xl sm:text-4xl font-bold py-4'>What We Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src="/../public/mower.png"
                                alt="/"
                                height='96'
                                width='96'
                            />
                        </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='font-bold'>Maintenance</h3>
                            </div>   
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src="/../public/digger.png"
                                alt="/"
                                height='96'
                                width='96'
                            />
                        </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='font-bold'>Landscape Construction</h3>
                            </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src="/../public/shovel.png"
                                alt="/"
                                height='96px'
                                width='96px'
                            />
                        </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3 className='font-bold'>Snow Removal</h3>
                            </div>  
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default Skills