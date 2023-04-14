import Image from 'next/image'
import React from 'react'
import otherServicesImg from '../public/assets/otherServices.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const otherServices = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={otherServicesImg} alt='Green Card & Visa'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Seguros</h2>
                <h3>Selección y Gestión</h3>
            </div>
        </div>

        <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Proyecto</p>
                <h2>Aseguradoras</h2>
                <p>Estamos comprometidos en ayudar a nuestros clientes 
                    a proteger sus activos y bienestar financiero a través de la selección y gestión de 
                    seguros adecuados para sus necesidades. Ya sea que necesite un seguro de salud, de hogar, 
                    de auto o de vida, estamos aquí para brindarle el asesoramiento y la orientación que 
                    necesita para tomar decisiones informadas y obtener la protección que se merece. Podemos 
                    ayudarlo a navegar por el complejo mundo 
                    de las pólizas y aseguradoras, y asegurarnos de que reciba la cobertura adecuada a precios 
                    competitivos.
                </p>
                <Link target='_blank' href='https://www.whatsapp.com/'>
                    <button className='btn px-8 py-2 mt-4 text-white bg-green-600'>Whatsapp</button>
                </Link>
            </div>

            <div className='col-span-4 md:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4 scale-90 hover:scale-100 ease-in duration-300'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Tipos</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> MEDICOS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> DE VIDA
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> AUTOMOVILES
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> COMERCIALES
                        </p>
                    </div>
                </div>

            </div>
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 scale-90 hover:scale-100 ease-in duration-300'>
                <div className='p-4'>
                    <form id='contactForm'>
                        <h3>Contacto Seguros</h3>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Nombre</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                            </div>

                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Telefono</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                            </div>

                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Asunto</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Mensaje</label>
                            <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                        </div>
                        <button className='w-full p-4 text-gray-100 mt-4 btn'>Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
        
        <Link href='/#projects'>
            <p className='underline cursor-pointer font-bold p-2'>Back</p>
        </Link>
    </div>
  )
}

export default otherServices