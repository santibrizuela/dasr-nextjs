import React from 'react'
import {BiDollar, BiHomeAlt} from 'react-icons/bi'
import {MdWork} from 'react-icons/md'
import {FaPassport} from 'react-icons/fa'
import Link from 'next/link'

const Services = () => {
  return (
    <div id='services' className='w-full lg:h-screen py-20 lg:p-2 text-center'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#a21a21]'>Servicios</p>
            <h2 className='py-4'>¿Qué tenemos para tí?</h2>
            <div className='grid lg:grid-cols-3 gap-8'>
                

                <Link href='/immigration'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-gradient-to-r from-[#365084] to-[#a21a21] hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><FaPassport className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>DOCUMENTOS DE INMIGRACION</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>

                <Link href='/seguros'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-gradient-to-r from-[#365084] to-[#a21a21] hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><MdWork className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>SEGUROS</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>

                <Link href='/accounting'>
                    <div className='p-6 shadow-xl rounded-xl scale-90 hover:scale-100 ease-in duration-300 hover:bg-gradient-to-r from-[#365084] to-[#a21a21] hover:text-white'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <div><BiDollar className='text-5xl'/></div>
                            </div>
                            <div>
                                <h3>SERVICIOS CONTABLES</h3>
                            </div>                        
                        </div>
                    </div>
                </Link>
                

                              

                
                
            </div>
        </div>
        
    </div>
  )
}

export default Services