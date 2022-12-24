import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import {AiOutlineClose,AiOutlineMail,AiOutlineMenu} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
    return(
        <div className='fixed w-full h-20 bg-gray-300 shadow-xl z-[100000]' >
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image 
                    src='/../public/navLogo.png' 
                    alt='/' 
                    width='75' 
                    height='65'
                />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Home</li>
                        </Link>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>About</li>
                        </Link>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Skills</li>
                        </Link>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Projects</li>
                        </Link>
                        <Link href="/">
                            <li className='ml-10 text-sm uppercase hover:border-b cursor-pointer'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>
            <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                                nav
                                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                                }
                                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image 
                                src='/../public/navLogo.png' 
                                alt='/'
                                width='75'
                                height='65'
                            />
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] m:w[90%] py-4'>Landscaping</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm cursor-pointer'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm cursor-pointer'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm cursor-pointer'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm cursor-pointer'>Project</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm cursor-pointer'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar