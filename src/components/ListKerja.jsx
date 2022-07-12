import React from 'react'

import bgImg from '../assets/blogger.png'
import bgImage from '../assets/programing.png'
import bgSalary from '../assets/salary.png'
import bgKerja from '../assets/kerja.jpg'
import bgAcc from '../assets/accounting.png'
import bgCs from '../assets/customer-service.png'
import bgClean from '../assets/cleaning-staff.png'
import { ArrowSmRightIcon } from '@heroicons/react/outline'

const ListKerja = () => {
  return (
    <div className='w-full h-screen' >
      <div className='w-full h-[700px] bg-gray-900/90 absolute' >
        <img className='w-full h-full object-cover mix-blend-overlay' src={bgKerja} alt="/" />
      </div>
      <div className='max-w-[1240px] mx-auto text-white relative'  >
        <div className='text-center px-4 py-12'>
          <h2 className='text-4xl pt-8 uppercase '>List Kerja</h2>
          <h1 className='text-7xl pt-10 font-bold'>Anda Bingung Cari Kerja?</h1>
          <p className='pt-10 text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-10 px-4 pt-10 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-xl hover:scale-110 duration-300 hover:bg-yellow-400 '>
            <div className='p-8'>
              <img className='w-20 p-2 bg-yellow-400 rounded-lg mt-[2rem]' src={bgImage} alt="/" />
              <h3 className='py-4 text-2xl font-sans'>ADMINISTRASI</h3>
              <p>Kami akan memberikan informasi mengenai pekerjaan yang berhubungan dengan administrasi</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='font-bold flex items-center'>Click Here <ArrowSmRightIcon className='w-7 ml-2' /></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-xl hover:scale-110 duration-300 hover:bg-yellow-400'>
            <div className='p-8'>
              <img className='w-20 p-2 bg-yellow-400 rounded-lg mt-[2rem]' src={bgImg} alt="/" />
              <h3 className='py-4 text-2xl font-sans'>PROGRAMING</h3>
              <p>Kami akan memberikan informasi mengenai pekerjaan yang berhubungan dengan programing</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='font-bold flex items-center'>Click Here <ArrowSmRightIcon className='w-7 ml-2' /></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-xl hover:scale-110 duration-300 hover:bg-yellow-400'>
            <div className='p-8'>
              <img className='w-20 p-2 bg-yellow-400 rounded-lg mt-[2rem]' src={bgSalary} alt="/" />
              <h3 className='py-4 text-2xl font-sans'>KEUANGAN</h3>
              <p>Kami akan memberikan informasi mengenai pekerjaan yang berhubungan dengan keuangan</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='font-bold flex items-center'>Click Here <ArrowSmRightIcon className='w-7 ml-2' /></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-xl hover:scale-110 duration-300 hover:bg-yellow-400'>
            <div className='p-8'>
              <img className='w-20 p-2 bg-yellow-400 rounded-lg mt-[2rem]' src={bgAcc} alt="/" />
              <h3 className='py-4 text-2xl font-sans'>MANAGEMEN</h3>
              <p>Kami akan memberikan informasi mengenai pekerjaan yang berhubungan dengan managemen</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='font-bold flex items-center'>Click Here <ArrowSmRightIcon className='w-7 ml-2' /></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-xl hover:scale-110 duration-300 hover:bg-yellow-400'>
            <div className='p-8'>
              <img className='w-20 p-2 bg-yellow-400 rounded-lg mt-[2rem]' src={bgCs} alt="/" />
              <h3 className='py-4 text-2xl font-sans'>CUSTOMER SERVICE</h3>
              <p>Kami akan memberikan informasi mengenai pekerjaan yang berhubungan dengan customer service</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='font-bold flex items-center'>Click Here <ArrowSmRightIcon className='w-7 ml-2' /></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-xl hover:scale-110 duration-300 hover:bg-yellow-400'>
            <div className='p-8'>
              <img className='w-20 p-2 bg-yellow-400 rounded-lg mt-[2rem]' src={bgClean} alt="/" />
              <h3 className='py-4 text-2xl font-sans'>CLEANING SERVICE</h3>
              <p>Kami akan memberikan informasi mengenai pekerjaan yang berhubungan dengan cleaning service</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='font-bold flex items-center'>Click Here <ArrowSmRightIcon className='w-7 ml-2' /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListKerja
