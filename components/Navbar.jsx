import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiFillInstagram, AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import {BsFillPersonLinesFill, BsPersonVcard} from 'react-icons/bs'
import { useRouter } from 'next/router'
import zetaGroupLogo from '../public/assets/zetaGroupLogo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router = useRouter()

    useEffect(()=>{
      if (
        router.asPath === '/' ||
        router.asPath === '/greencardvisas' ||
        router.asPath === '/turismo' ||
        router.asPath === '/citizenship' ||
        router.asPath === '/otherServices'
      ) {
        setNavBg('transparent')
        setLinkColor('#ecf0f3')
      } else{
        setNavBg('#ecf0f3')
        setLinkColor('#1f2937')
      }
    }, [router])

    const handleNav = () => {
      setNav(!nav)
    };

    useEffect(()=> {
      const handleShadow = () => {
        if (window.scrollY>= 90) {
          setShadow(true);
        } else {
          setShadow(false)
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);

  return (
    <div
    style={{gackgroundColor: `${navBg}`}} 
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] backdrop-blur-sm' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'>
              <Image 
              src={zetaGroupLogo} 
              alt='ZetaGroup' 
              width='125' 
              height='50'
              />
            </Link>            
            
            <div>
              <ul
              
                className={shadow ? 'hidden md:flex font-semibold text-[#1f2937]' : 'hidden md:flex font-semibold text-gray-200'}>
                <Link href='/'>
                  <li className='ml-10 text-sm uppercase hover:text-[#a21a21]'>Home</li>
                </Link>
                <Link href='/#about'>
                  <li className='ml-10 text-sm uppercase hover:text-[#a21a21]'>About</li>
                </Link>
                <Link href='/#services'>
                  <li className='ml-10 text-sm uppercase hover:text-[#a21a21]'>Servicios</li>
                </Link>
                <Link href='/#projects'>
                  <li className='ml-10 text-sm uppercase hover:text-[#a21a21]'>Proyectos</li>
                </Link>
                <Link href='/#contact'>
                  <li className='ml-10 text-sm uppercase hover:text-[#a21a21]'>Contacto</li>
                </Link>
              </ul>
              <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25}/>
              </div>
            </div>
        </div>

        <div 
          className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}
        >
          <div 
            className={
              nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                  : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
          >
            <div>
              <div className='flex w-full items-center justify-between'>
                <Link onClick={handleNav} href='/'>
                  <Image 
                  src={zetaGroupLogo} 
                  width='87' 
                  height='35' 
                  alt='ZetaGroup'/>
                </Link>
                <div onClick={()=> setNav(false)} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineClose/>
                </div>
              </div>
              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>ASISTENCIA AL INMIGRANTE</p>
              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/#about'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/#services'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Servicios</li>
                </Link>
                <Link href='/#projects'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Proyectos</li>
                </Link>
                <Link href='/#contact'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contacto</li>
                </Link>
              </ul>
              <div className='pt-40'>
                <p className='uppercase tracking-widest'>Let`s Connect</p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <Link target='_blank' href='https://www.linkedin.com/'>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                      <AiOutlineLinkedin/>
                    </div>
                  </Link>
                  <Link target='_blank' href='https://www.instagram.com/'>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                      <AiOutlineInstagram/>
                    </div>
                  </Link>
                  <Link href='/#contact'>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                      <AiOutlineMail/>
                    </div>
                  </Link>
                  
                  <Link href='/#projects'>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                      <BsPersonVcard/>
                    </div>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Navbar