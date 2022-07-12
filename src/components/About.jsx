import React from 'react'

const About = () => {
    return (
        <div className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-7xl font-bold font-sans text-zinc-600'>Trusted by developer across the world</h2>
                    <p className='text-2xl py-6 font-sans mt-5 text-zinc-700 font-medium'>Kamu siswa SMK atau Mahasiswa? Cari tempat PKL, Magang, Prakerin, OJT atau Praktik Kerja?
                        Seven Inc membuka kesempatan buat Kamu yang ingin menjajal pengalaman kerja di bisnis yang dijalankan Seven Inc</p>
                </div>

                <div className='grid md:grid-cols-3 gap-3 px-2 text-center mt-4'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl text-yellow-300 font-bold'>100%</p>
                        <p className='text-2xl mt-4'>Terpercaya</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl text-yellow-300 font-bold'>18</p>
                        <p className='text-2xl mt-4'>Divisi</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl text-yellow-300 font-bold'>FREE</p>
                        <p className='text-2xl mt-4'>Registrasi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About