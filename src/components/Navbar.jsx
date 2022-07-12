import React, { useState } from 'react'
import { Modal } from 'bootstrap'

import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const targetEl = document.getElementById('authentication-modal');





    return (
        <div className='w-screen h-[80px] z-10 fixed shadow-xl' style={{ background: '#393E46' }}>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold ml-5 sm:text-4xl text-white font-mono '>AIRUYYY.</h1>
                    <ul className='hidden md:flex'>
                        <li className=' text-white hover:text-yellow-400 duration-200 ml-20 '>Home</li>
                        <li className='text-white'>Search</li>
                        <li className='text-white'>Category</li>
                        <li className='text-white'>About</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent mr-4 border  text-white hover:text-yellow-400' data-modal-toggle="authentication-modal">Sign In</button>
                    <button className='mr-3 px-5 py-2 bg-yellow-400 hover:bg-transparent text-white hover:text-yellow-400 border border-yellow-400 rounded-lg' data-modal-toggle="authentication-modal">
                        Sign Up
                    </button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-7 mr-4' fill='white' /> : <XIcon className='w-7 mr-4' fill='white' />}
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute w-full px-8'} style={{ background: '#393E46' }}>

                <li className=' text-white border-b-2 border-zinc-700 w-full'>Home</li>
                <li className='text-white border-b-2 border-zinc-700 w-full'>Search</li>
                <li className='text-white border-b-2 border-zinc-700 w-full'>Category</li>
                <li className='text-white border-b-2 border-zinc-700 w-full'>About</li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-white px-8 py-3 mb-4 hover:text-yellow-400' data-modal-toggle="authentication-modal">Sign In</button>
                    <button className='px-8 py-3 bg-yellow-400 hover:bg-transparent text-white hover:text-yellow-400 border border-yellow-400 rounded-lg' data-modal-toggle="authentication-modal">Sign Up</button>
                </div>
            </ul>

            <div id='authentication-modal' tabIndex="-1" aria-hidden="true" className='hidden overflow-y-auto overflow-x-hidden 
            fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full'>
                <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
                    <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                        <button type='button' className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg
                        text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white' data-modal-toggle="authentication-modal">
                            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule="evenodd"></path></svg>
                        </button>
                        <div className='py-6 px-6 lg:px-8'>
                            <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>Sign in to our platform</h3>
                            <form action="#" className='space-y-6'>
                                <div>
                                    <label for="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Your Email</label>
                                    <input type="email" name='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='name@company.com' required />
                                </div>
                                <div>
                                    <label for="password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Your Password</label>
                                    <input type="password" name='password' id='password' placeholder='••••••••' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' required />
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex items-start'>
                                        <div className='flex items-center h-5'>
                                            <input type="checkbox" id='remember' value="" className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800' required />
                                        </div>
                                        <label for='remember' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Remember me</label>
                                    </div>
                                    <a href="#" className='text-sm text-blue-700 hover:underline dark:text-blue-500'>Lost Password</a>
                                </div>
                                <button type='submit' className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Login to your account</button>
                                <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
                                    Not Registed? <a href="#" className='text-blue-700 hover:underline dark:text-blue-500'>Create account</a>
                                </div>
                            </form>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Navbar