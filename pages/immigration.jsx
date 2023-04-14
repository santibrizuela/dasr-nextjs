import Image from 'next/image'
import React from 'react'
import greencardvisasImg from '../public/assets/familyOnSofa.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const greencardvisas = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={greencardvisasImg} alt='Green Card & Visa'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Documentos de Inmigración</h2>
                <h3>Preparación y Gestión</h3>
            </div>
        </div>

        <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Proyecto</p>
                <h2>Inmigración</h2>
                <p>La ley de inmigración en Estados Unidos es compleja y en constante cambio, 
                    lo que puede resultar abrumador para quienes desean emigrar legalmente. 
                    Es aquí donde nosotros, especializados en inmigración, podemos ser de gran 
                    ayuda al preparar y gestionar los documentos necesarios para el proceso 
                    de inmigración. Con nuestra experiencia y conocimientos, podemos asesorar a los 
                    clientes sobre sus opciones y guiarlos a través de los procedimientos 
                    necesarios para lograr sus objetivos de inmigración. De esta manera, Zeta Group 
                    puede ayudar a hacer realidad los sueños de muchas 
                    personas que buscan una nueva vida en Estados Unidos.
                </p>
                <Link target='_blank' href='https://www.whatsapp.com/'>
                    <button className='btn px-8 py-2 mt-4 text-white bg-green-600'>Whatsapp</button>
                </Link>
            </div>

            <div className='col-span-4 md:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4 scale-90 hover:scale-100 ease-in duration-300'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Documentos</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> VISAS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> PERMISOS DE TRABAJO
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> RESIDENCIA PERMANENTE
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> CUIDADANIA
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> ASILO
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> PETICIONES FAMILIARES
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> CERTIFICACION LABORAL
                        </p>
                    </div>
                </div>

            </div>
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 scale-90 hover:scale-100 ease-in duration-300'>
                <div className='p-4'>
                    <form id='contactForm'>
                        <h3>Contacto Inmigración</h3>
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

export default greencardvisas