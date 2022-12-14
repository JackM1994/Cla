import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'
import rosenthalImg from '../public/rosenthal.jpeg'


const rosenthal = () => {
    return (
        
        <div className='w-full'>
            
            <div className='w-screen h-[30vh] lg:h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/80 z-10' />
                    <Image 
                        className='absolute' layout='fill' objectFit='cover' 
                        src={rosenthalImg}
                        alt='/'
                    />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                        <h2 className='py-2'>Rosenthal Showhomes</h2>
                        <h3>8331 224 St NW Edmonton</h3>
                    </div>
                </div>
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8'>
                    <div className='col-span-4'>
                        <p className='text-[#fdad5c] text-xl'>Project</p>
                        <h2>Overview</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Link href='https://www.liverosenthal.com/'><button className='px-8 py-2 mt-4 mr-8'>Rosenthal Showhomes</button></Link>
                    </div>
                    <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='p-2 grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-center font-bold pb-2'>Job Specs</p>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>Grading
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>Tree planting
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>Shrub planting
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>Edging planter beds
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>Mulch
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/>Sod Laying
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link href="/#projects">
                        <p className='underline cursor-pointer'>Back</p>
                    </Link>
                </div>
        </div>
    )
 }
 export default rosenthal;

 