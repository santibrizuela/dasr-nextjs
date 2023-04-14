import Link from 'next/link'
import React from 'react'
import contactImg from '../public/assets/zetaGroupLogo.png'
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import { BsFillPersonLinesFill, BsPersonVcard } from 'react-icons/bs'
import Image from 'next/image'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center mask'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='justify-center text-center'>

                <Image className='rounded-xl' src={contactImg} alt="Contact" />
                
                <h2 className='py-2 text-gray-300'>ASISTENCIA AL INMIGRANTE</h2>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 text-gray-300'>
                    <Link target='_blank' href='https://www.whatsapp.com/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineWhatsApp/>
                        </div>
                    </Link>
                    <Link target='_blank' href='https://www.linkedin.com/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineLinkedin/>
                        </div>
                    </Link>
                    <Link href='/#contact'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                    </Link>
                    <Link href='/#projects'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsPersonVcard/>
                        </div>
                    </Link>
                    <Link target='_blank' href='https://www.instagram.com/'>
                        <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineInstagram/>
                        </div>
                    </Link>    
                </div>
                
                <Link href='/#services'>
                    <div className='btn-outline'>
                        <p className='p-2'>Servicios</p>
                    </div>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Main