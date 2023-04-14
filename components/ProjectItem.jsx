import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, projectUrl, detail}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#365084] to-[#a21a21]'>
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='Green Card y Residencia'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-300'>
            <h3 className='text-2xl tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2'>{detail}</p>
            <Link href={projectUrl}>
                <p className='py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer btn hover:shadow-none'>Leer más</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem