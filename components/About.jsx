import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import aboutImg from '../public/assets/dsrEscudo2.png'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen py-20 md:p-2 flex items-center text-center'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#365084]'>Acerca de</p>
                <h2 className='py-4'>DEL SUR CLUB</h2>
                <p className='py-2 text-gray-600'>Te guiamos en la protección de tus derechos.</p>
                <p className='py-2 text-gray-600'>
                Nuestro propósito es llevar de la mano al inmigrante, ayudarlo a discernir que resulta 
                más conveniente de acuerdo con su perfil, presupuesto, intereses, y mucho más. 
                Acompañarlo en este proceso es crucial para asegurar que la decisión tomada fue las más 
                acertada, esa que lo llevará a su cometido final de forma óptima.
                </p>

                <p>
                Nuestra misión es ofrecer las mejores oportunidades para el inmigrante e incluso para 
                quiénes aun no lo son y planifican emigrar, poner a su alcance todas las posibles opciones 
                que optimicen su calidad de vida, brindar mejores condiciones y alternativas para su 
                desarrollo que le permitan una mejor adaptación a su nueva vida.
                </p>
                <p>Lo invitamos a conocernos. Somos sus aliados en Estados Unidos.
                </p>


                <Link href='/aboutus'>
                    <p 
                        className='p-2 rounded-lg btn text-gray-200 font-bold text-lg cursor-pointer w-fit m-auto shadow-xl hover:scale-105 ease-in duration-300'
                    >
                        Ver más
                    </p>
                </Link>
                
                
                
            </div>
            <div className='w-full h-auto scale-90 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-100 ease-in duration-300'>
                <Image className='rounded-xl' src={aboutImg} alt="ZetaGroup"></Image>
            </div>
        </div>
    </div>
  )
}

export default About