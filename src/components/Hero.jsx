import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/businessman.png'


const Hero = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-between' style={{ background: '#393E46' }}>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-white text-2xl'>Seven Inc & magangjogja.com</p>
                    <h1 className='text-white py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                    <p className='text-white text-2xl'>This is our Tech brand</p>
                    <div className='border py-5 px-6 mt-4 ml-3 rounded-xl shadow-xl bg-yellow-400 border-yellow-400'>
                        <p className='text-white  '>Daftar dan Gabung</p>
                    </div>
                </div>
                <div>

                    <img className='w-84  ml-20 mb-5 drop-shadow-2xl ' src={bgImg} alt="/" />
                </div>
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-yellow-500
            borderborder-slate-300 rounded-xl text-center shadow-xl'>
                    <p className='text-2xl mb-2 text-white font-sans font-bold'>Data Services</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-white'><CloudUploadIcon className='h-6 text-white' />App Security</p>
                        <p className='flex px-4 py-2 text-white'><DatabaseIcon className='h-6 text-white' />Dashboard Design</p>
                        <p className='flex px-4 py-2 text-white'><ServerIcon className='h-6 text-white' />Cloud Data</p>
                        <p className='flex px-4 py-2 text-white'><PaperAirplaneIcon className='h-6 text-white' />API</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero